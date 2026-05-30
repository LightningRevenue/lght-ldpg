create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.admin_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists LightningRevenue.admin_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references LightningRevenue.admin_users (id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create index if not exists admin_users_username_idx
  on LightningRevenue.admin_users (lower(username));

create index if not exists admin_sessions_user_id_idx
  on LightningRevenue.admin_sessions (user_id);

create index if not exists admin_sessions_expires_at_idx
  on LightningRevenue.admin_sessions (expires_at);
