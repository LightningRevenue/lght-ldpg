create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_requests_created_at_idx
  on LightningRevenue.contact_requests (created_at desc);

create index if not exists contact_requests_email_idx
  on LightningRevenue.contact_requests (email);
