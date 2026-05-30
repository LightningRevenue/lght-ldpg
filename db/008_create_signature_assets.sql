create schema if not exists lrvn;

create extension if not exists pgcrypto;

create table if not exists lrvn.signature_assets (
  id uuid primary key default gen_random_uuid(),
  public_id text not null unique,
  name text not null,
  alt_text text,
  file_name text not null,
  content_type text not null,
  file_size integer not null,
  display_width integer not null,
  display_height integer,
  image_data bytea not null,
  created_by uuid references lrvn.admin_users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists signature_assets_created_at_idx
  on lrvn.signature_assets (created_at desc);
