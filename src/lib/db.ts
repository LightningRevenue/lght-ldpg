import { Pool } from "pg";

type DatabaseConfig = {
  connectionString: string;
  schema: string;
};

const globalForPg = globalThis as typeof globalThis & {
  pgPool?: Pool;
};

let cachedDatabaseConfig: DatabaseConfig | undefined;

function getDatabaseConfig(): DatabaseConfig {
  if (cachedDatabaseConfig) {
    return cachedDatabaseConfig;
  }

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

  cachedDatabaseConfig = {
    connectionString: url.toString(),
    schema,
  };

  return cachedDatabaseConfig;
}

export function getDatabaseSchema() {
  return getDatabaseConfig().schema;
}

export function getPool() {
  if (globalForPg.pgPool) {
    return globalForPg.pgPool;
  }

  const databaseConfig = getDatabaseConfig();
  const pool = new Pool({
    connectionString: databaseConfig.connectionString,
    ssl:
      process.env.DATABASE_SSL === "true"
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
  });

  if (process.env.NODE_ENV !== "production") {
    globalForPg.pgPool = pool;
  }

  return pool;
}
