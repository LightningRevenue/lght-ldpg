import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { Pool } from 'pg';

const root = process.cwd();
const envPath = path.join(root, '.env.local');
const endpoint =
  process.env.NEWSLETTER_APPROVED_ENDPOINT ||
  'http://localhost:3015/api/newsletter-approved';
const serverUrl = new URL(endpoint);
const testEmail = 'codex-newsletter@LightningRevenue.local';

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
  ['/d', '/s', '/c', `npm run start -- -p ${serverUrl.port || '3015'}`],
  {
    cwd: root,
    stdio: 'ignore',
    windowsHide: true,
  }
);

process.on('exit', () => server.kill());

try {
  await waitForServer();

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: testEmail }),
  });

  if (!response.ok) {
    throw new Error(
      `POST failed with ${response.status}: ${await response.text()}`
    );
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
    await pool.query(
      `delete from ${databaseConfig.schema}.newsletter_approved where email = $1`,
      [testEmail]
    );
  } finally {
    await pool.end();
  }

  console.log(`POST OK, deleted newsletter test row ${testEmail}`);
} finally {
  server.kill();
}
