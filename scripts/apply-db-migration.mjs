import fs from "node:fs";
import path from "node:path";
import { Pool } from "pg";

const root = process.cwd();
const envPath = path.join(root, ".env.local");
const migrationDir = path.join(root, "db");

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

function getConnectionString() {
  const rawUrl = process.env.DATABASE_URL;

  if (!rawUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const url = new URL(rawUrl);
  url.searchParams.delete("schema");
  return url.toString();
}

loadEnvFile(envPath);

const pool = new Pool({
  connectionString: getConnectionString(),
  ssl:
    process.env.DATABASE_SSL === "true"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

try {
  const migrationFiles = fs
    .readdirSync(migrationDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of migrationFiles) {
    const sql = fs.readFileSync(path.join(migrationDir, file), "utf8");
    await pool.query(sql);
    console.log(`Applied db/${file}`);
  }
} finally {
  await pool.end();
}
