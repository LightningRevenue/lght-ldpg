create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.help_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  selected_pain_points text[] not null default '{}',
  selected_outcomes text[] not null default '{}',
  selected_services text[] not null default '{}',
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists help_requests_created_at_idx
  on LightningRevenue.help_requests (created_at desc);

create index if not exists help_requests_email_idx
  on LightningRevenue.help_requests (email);
