import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { Pool } from 'pg';

const root = process.cwd();
const envPath = path.join(root, '.env.local');
const endpoint =
  process.env.SERVICE_REQUESTS_ENDPOINT ||
  'http://localhost:3012/api/service-requests';
const serverUrl = new URL(endpoint);

const serviceTables = {
  ppc: 'ppc_requests',
  seo: 'seo_requests',
  'web-development': 'web_development_requests',
  'software-development': 'software_development_requests',
  'ui-ux': 'ui_ux_requests',
  smm: 'smm_requests',
  'sales-setup': 'sales_setup_requests',
  'lead-generation': 'lead_generation_requests',
};

const payloads = {
  ppc: {
    spend: '$5,000 - $20,000',
    website: 'https://LightningRevenue.local/ppc',
  },
  seo: {
    budget: '$5,000 - $15,000',
    website: 'https://LightningRevenue.local/seo',
  },
  'web-development': {
    budget: '$10k - $25k',
    website: 'https://LightningRevenue.local/web',
  },
  'software-development': {
    budget: '$25k - $50k',
    techStack: 'AWS, PostgreSQL, React',
  },
  'ui-ux': {
    budget: '$5k - $10k',
    appUrl: 'https://LightningRevenue.local/app',
  },
  smm: {
    budget: '$2,500 - $5,000',
    socialUrl: 'https://linkedin.com/company/LightningRevenue',
  },
  'sales-setup': {
    teamSize: '4 - 10 Reps',
    crm: 'HubSpot',
  },
  'lead-generation': {
    volume: '5k - 20k prospects',
    techStack: 'HubSpot, Apollo',
  },
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
  ['/d', '/s', '/c', `npm run start -- -p ${serverUrl.port || '3012'}`],
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

  for (const [service, fields] of Object.entries(payloads)) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service,
        name: 'Codex Service Test',
        email: `codex-${service}@LightningRevenue.local`,
        challenge: `Test challenge for ${service}`,
        ...fields,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `${service} POST failed with ${response.status}: ${await response.text()}`
      );
    }

    const { id } = await response.json();
    inserted.push({ service, id });
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
    for (const { service, id } of inserted) {
      await pool.query(
        `delete from ${databaseConfig.schema}.${serviceTables[service]} where id = $1`,
        [id]
      );
    }
  } finally {
    await pool.end();
  }

  console.log(
    `POST OK for ${inserted.length} service tables, deleted test rows`
  );
} finally {
  server.kill();
}
