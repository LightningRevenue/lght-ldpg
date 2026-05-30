create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.newsletter_approved (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists newsletter_approved_created_at_idx
  on LightningRevenue.newsletter_approved (created_at desc);
