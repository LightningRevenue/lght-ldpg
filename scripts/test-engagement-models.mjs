import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { Pool } from 'pg';

const root = process.cwd();
const envPath = path.join(root, '.env.local');
const endpoint =
  process.env.ENGAGEMENT_MODELS_ENDPOINT ||
  'http://localhost:3011/api/engagement-models';
const serverUrl = new URL(endpoint);

const modelTables = {
  foundation: 'foundation_requests',
  momentum: 'momentum_requests',
  apex: 'apex_requests',
  custom: 'custom_package_requests',
};

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const envFile = fs.readFileSync(filePath, 'utf8');

  for (const line of envFile.split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;
    process.env[key] ??= rawValue.replace(/^"|"$/g, '');
  }
}

function getDatabaseConfig() {
  const rawUrl = process.env.DATABASE_URL;

  if (!rawUrl) {
    throw new Error('DATABASE_URL is not configured.');
  }

  const url = new URL(rawUrl);
  const schema = url.searchParams.get('schema') || 'public';
  url.searchParams.delete('schema');

  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(schema)) {
    throw new Error('DATABASE_URL schema parameter is invalid.');
  }

  return {
    connectionString: url.toString(),
    schema,
  };
}

async function waitForServer() {
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${serverUrl.origin}/`);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  throw new Error('Timed out waiting for the local Next.js server.');
}

loadEnvFile(envPath);

const server = spawn(
  'cmd.exe',
  ['/d', '/s', '/c', `npm run start -- -p ${serverUrl.port || '3011'}`],
  {
    cwd: root,
    stdio: 'ignore',
    windowsHide: true,
  }
);

process.on('exit', () => server.kill());

const inserted = [];

try {
  await waitForServer();

  for (const model of Object.keys(modelTables)) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        name: 'Codex Engagement Test',
        email: `codex-${model}@LightningRevenue.local`,
        company: 'https://LightningRevenue.local',
        selectedFoundationServices: ['f-web', 'f-seo'],
        selectedPainPoints: ['seo'],
        selectedOutcomes: ['ppc'],
        selectedServices: ['seo', 'ppc'],
        selectedExpertise: ['sla'],
      }),
    });

    if (!response.ok) {
      throw new Error(
        `${model} POST failed with ${response.status}: ${await response.text()}`
      );
    }

    const { id } = await response.json();
    inserted.push({ model, id });
  }

  const databaseConfig = getDatabaseConfig();
  const pool = new Pool({
    connectionString: databaseConfig.connectionString,
    ssl:
      process.env.DATABASE_SSL === 'true'
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
  });

  try {
    for (const { model, id } of inserted) {
      await pool.query(
        `delete from ${databaseConfig.schema}.${modelTables[model]} where id = $1`,
        [id]
      );
    }
  } finally {
    await pool.end();
  }

  console.log(
    `POST OK for ${inserted.map(item => item.model).join(', ')}, deleted test rows`
  );
} finally {
  server.kill();
}
