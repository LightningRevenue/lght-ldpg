create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.foundation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  selected_foundation_services text[] not null default '{}',
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.momentum_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.apex_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.custom_package_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  selected_pain_points text[] not null default '{}',
  selected_outcomes text[] not null default '{}',
  selected_services text[] not null default '{}',
  selected_expertise text[] not null default '{}',
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists foundation_requests_created_at_idx
  on LightningRevenue.foundation_requests (created_at desc);

create index if not exists foundation_requests_email_idx
  on LightningRevenue.foundation_requests (email);

create index if not exists momentum_requests_created_at_idx
  on LightningRevenue.momentum_requests (created_at desc);

create index if not exists momentum_requests_email_idx
  on LightningRevenue.momentum_requests (email);

create index if not exists apex_requests_created_at_idx
  on LightningRevenue.apex_requests (created_at desc);

create index if not exists apex_requests_email_idx
  on LightningRevenue.apex_requests (email);

create index if not exists custom_package_requests_created_at_idx
  on LightningRevenue.custom_package_requests (created_at desc);

create index if not exists custom_package_requests_email_idx
  on LightningRevenue.custom_package_requests (email);
