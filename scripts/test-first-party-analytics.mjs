import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { Pool } from 'pg';

const root = process.cwd();
const envPath = path.join(root, '.env.local');
const origin = process.env.ANALYTICS_TEST_ORIGIN || 'http://localhost:3016';
const sessionId = `codex-session-${Date.now()}`;
const visitorId = `codex-visitor-${Date.now()}`;
const contactEmail = 'codex-analytics-contact@LightningRevenue.local';

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
      const response = await fetch(`${origin}/`);
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
  ['/d', '/s', '/c', 'npm run start -- -p 3016'],
  {
    cwd: root,
    stdio: 'ignore',
    windowsHide: true,
  }
);

process.on('exit', () => server.kill());

const cookieHeader = [
  `LightningRevenue_session_id=${encodeURIComponent(sessionId)}`,
  `LightningRevenue_visitor_id=${encodeURIComponent(visitorId)}`,
  `LightningRevenue_landing_page=${encodeURIComponent('/services/seo?utm_source=codex')}`,
  `LightningRevenue_referrer=${encodeURIComponent('https://linkedin.com/')}`,
  `LightningRevenue_utm_source=${encodeURIComponent('codex')}`,
  `LightningRevenue_utm_campaign=${encodeURIComponent('analytics_test')}`,
].join('; ');

let contactId;

try {
  await waitForServer();

  const analyticsResponse = await fetch(`${origin}/api/analytics/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessionId,
      visitorId,
      eventName: 'page_view',
      path: '/services/seo?utm_source=codex',
      landingPage: '/services/seo?utm_source=codex',
      referrer: 'https://linkedin.com/',
      utm: {
        source: 'codex',
        campaign: 'analytics_test',
      },
      metadata: {
        smokeTest: true,
      },
    }),
  });

  if (!analyticsResponse.ok) {
    throw new Error(
      `Analytics POST failed with ${analyticsResponse.status}: ${await analyticsResponse.text()}`
    );
  }

  const contactResponse = await fetch(`${origin}/api/contact-requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieHeader,
    },
    body: JSON.stringify({
      name: 'Codex Analytics Contact',
      email: contactEmail,
      company: 'https://LightningRevenue.local',
      service: 'SEO Optimization',
      budget: '$15k - $50k',
      timeline: 'This month',
      message: 'Analytics attribution smoke test.',
    }),
  });

  if (!contactResponse.ok) {
    throw new Error(
      `Contact POST failed with ${contactResponse.status}: ${await contactResponse.text()}`
    );
  }

  contactId = (await contactResponse.json()).id;

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
    const attribution = await pool.query(
      `
        select id
        from ${databaseConfig.schema}.analytics_lead_attribution
        where lead_type = 'contact' and lead_id = $1 and session_id = $2
      `,
      [contactId, sessionId]
    );

    if (attribution.rowCount !== 1) {
      throw new Error('Expected exactly one lead attribution row.');
    }

    await pool.query(
      `delete from ${databaseConfig.schema}.analytics_lead_attribution where lead_id = $1`,
      [contactId]
    );
    await pool.query(
      `delete from ${databaseConfig.schema}.contact_requests where id = $1`,
      [contactId]
    );
    await pool.query(
      `delete from ${databaseConfig.schema}.analytics_events where session_id = $1`,
      [sessionId]
    );
    await pool.query(
      `delete from ${databaseConfig.schema}.analytics_sessions where session_id = $1`,
      [sessionId]
    );
  } finally {
    await pool.end();
  }

  console.log(`Analytics attribution OK for contact ${contactId}`);
} finally {
  server.kill();
}
