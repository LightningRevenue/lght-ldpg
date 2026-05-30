import { randomBytes, scrypt as scryptCallback } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const SCRYPT_N = 32768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;

function sqlString(value) {
  return String(value).replaceAll("'", "''");
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
    'scrypt',
    SCRYPT_N,
    SCRYPT_R,
    SCRYPT_P,
    salt.toString('base64url'),
    Buffer.from(derivedKey).toString('base64url'),
  ].join('$');
}

const [, , usernameArg, passwordArg] = process.argv;

if (!usernameArg || !passwordArg) {
  console.error(
    'Usage: npm run admin:hash-password -- <username> "<password>"'
  );
  process.exit(1);
}

const username = usernameArg.trim().toLowerCase();

if (!username) {
  console.error('Username is required.');
  process.exit(1);
}

const passwordHash = await hashPassword(passwordArg);

console.log(`Username: ${username}`);
console.log(`Password hash: ${passwordHash}`);
console.log('');
console.log('SQL:');
console.log(
  `insert into LightningRevenue.admin_users (username, password_hash) values ('${sqlString(username)}', '${sqlString(
    passwordHash
  )}') on conflict (username) do update set password_hash = excluded.password_hash, is_active = true, updated_at = now();`
);
