import 'server-only';

import {
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
  createHash,
} from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getDatabaseSchema, getPool } from '@/lib/db';

export const ADMIN_SESSION_COOKIE = 'LightningRevenue_admin_session';

const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;
const SESSION_DAYS = 7;

export type AdminUser = {
  id: string;
  username: string;
};

function sha256(value: string) {
  return createHash('sha256').update(value).digest('hex');
}

function scrypt(
  password: string,
  salt: Buffer,
  keyLength: number,
  options: { N: number; r: number; p: number; maxmem: number }
) {
  return new Promise<Buffer>((resolve, reject) => {
    scryptCallback(password, salt, keyLength, options, (error, derivedKey) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(derivedKey);
    });
  });
}

export async function hashAdminPassword(password: string) {
  const salt = randomBytes(16);
  const derivedKey = await scrypt(password, salt, KEY_LENGTH, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: 64 * 1024 * 1024,
  });

  return [
    'scrypt',
    SCRYPT_N,
    SCRYPT_R,
    SCRYPT_P,
    salt.toString('base64url'),
    Buffer.from(derivedKey).toString('base64url'),
  ].join('$');
}

export async function verifyAdminPassword(
  password: string,
  storedHash: string
) {
  const [algorithm, nRaw, rRaw, pRaw, saltRaw, hashRaw] = storedHash.split('$');

  if (
    algorithm !== 'scrypt' ||
    !nRaw ||
    !rRaw ||
    !pRaw ||
    !saltRaw ||
    !hashRaw
  ) {
    return false;
  }

  const expectedHash = Buffer.from(hashRaw, 'base64url');
  const derivedKey = await scrypt(
    password,
    Buffer.from(saltRaw, 'base64url'),
    expectedHash.length,
    {
      N: Number(nRaw),
      r: Number(rRaw),
      p: Number(pRaw),
      maxmem: 64 * 1024 * 1024,
    }
  );

  const actualHash = Buffer.from(derivedKey);

  return (
    actualHash.length === expectedHash.length &&
    timingSafeEqual(actualHash, expectedHash)
  );
}

export async function findAdminByUsername(username: string) {
  const schema = getDatabaseSchema();
  const result = await getPool().query<AdminUser & { password_hash: string }>(
    `
      select id, username, password_hash
      from ${schema}.admin_users
      where lower(username) = lower($1)
        and is_active = true
      limit 1
    `,
    [username]
  );

  return result.rows[0] || null;
}

export async function createAdminSession(userId: string) {
  const token = randomBytes(32).toString('base64url');
  const tokenHash = sha256(token);
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  const schema = getDatabaseSchema();

  await getPool().query(
    `
      insert into ${schema}.admin_sessions (user_id, token_hash, expires_at)
      values ($1, $2, $3)
    `,
    [userId, tokenHash, expiresAt]
  );

  return { token, expiresAt };
}

export async function getAdminFromToken(token: string | undefined) {
  if (!token) {
    return null;
  }

  const schema = getDatabaseSchema();
  const tokenHash = sha256(token);
  const result = await getPool().query<AdminUser>(
    `
      select admin_users.id, admin_users.username
      from ${schema}.admin_sessions
      inner join ${schema}.admin_users on admin_users.id = admin_sessions.user_id
      where admin_sessions.token_hash = $1
        and admin_sessions.expires_at > now()
        and admin_users.is_active = true
      limit 1
    `,
    [tokenHash]
  );

  if (!result.rows[0]) {
    return null;
  }

  await getPool().query(
    `
      update ${schema}.admin_sessions
      set last_seen_at = now()
      where token_hash = $1
    `,
    [tokenHash]
  );

  return result.rows[0];
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return getAdminFromToken(token);
}

export async function requireAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect('/admin/login');
  }

  return admin;
}

export async function deleteAdminSession(token: string | undefined) {
  if (!token) {
    return;
  }

  const schema = getDatabaseSchema();

  await getPool().query(
    `delete from ${schema}.admin_sessions where token_hash = $1`,
    [sha256(token)]
  );
}
