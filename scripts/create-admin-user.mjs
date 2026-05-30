import fs from "node:fs";
import path from "node:path";
import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
import { Pool } from "pg";

const root = process.cwd();
const envPath = path.join(root, ".env.local");
const scrypt = promisify(scryptCallback);
const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const envFile = fs.readFileSync(filePath, "utf8");

  for (const line of envFile.split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;
    process.env[key] ??= rawValue.replace(/^"|"$/g, "");
  }
}

function getDatabaseConfig() {
  const rawUrl = process.env.DATABASE_URL;

  if (!rawUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const url = new URL(rawUrl);
  const schema = url.searchParams.get("schema") || "public";
  url.searchParams.delete("schema");

  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(schema)) {
    throw new Error("DATABASE_URL schema parameter is invalid.");
  }

  return {
    connectionString: url.toString(),
    schema,
  };
}

async function hashPassword(password) {
  const salt = randomBytes(16);
  const derivedKey = await scrypt(password, salt, KEY_LENGTH, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: 64 * 1024 * 1024,
  });

  return [
    "scrypt",
    SCRYPT_N,
    SCRYPT_R,
    SCRYPT_P,
    salt.toString("base64url"),
    Buffer.from(derivedKey).toString("base64url"),
  ].join("$");
}

const [, , usernameArg, passwordArg] = process.argv;

if (!usernameArg || !passwordArg) {
  console.error('Usage: npm run admin:create-user -- <username> "<password>"');
  process.exit(1);
}

const username = usernameArg.trim().toLowerCase();

if (!username) {
  console.error("Username is required.");
  process.exit(1);
}

loadEnvFile(envPath);

const databaseConfig = getDatabaseConfig();
const passwordHash = await hashPassword(passwordArg);
const pool = new Pool({
  connectionString: databaseConfig.connectionString,
  ssl:
    process.env.DATABASE_SSL === "true"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

try {
  const result = await pool.query(
    `
      insert into ${databaseConfig.schema}.admin_users (username, password_hash)
      values ($1, $2)
      on conflict (username)
      do update set
        password_hash = excluded.password_hash,
        is_active = true,
        updated_at = now()
      returning id, username
    `,
    [username, passwordHash],
  );

  console.log(`Admin user ready: ${result.rows[0].username} (${result.rows[0].id})`);
} finally {
  await pool.end();
}
