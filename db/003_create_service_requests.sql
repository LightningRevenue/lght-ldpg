create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.ppc_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  spend text not null,
  website text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.seo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  budget text not null,
  website text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.web_development_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  budget text not null,
  website text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.software_development_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  budget text not null,
  tech_stack text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.ui_ux_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  budget text not null,
  app_url text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.smm_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  budget text not null,
  social_url text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.sales_setup_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  team_size text not null,
  crm text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.lead_generation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  challenge text not null,
  volume text not null,
  tech_stack text not null,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists ppc_requests_created_at_idx on LightningRevenue.ppc_requests (created_at desc);
create index if not exists ppc_requests_email_idx on LightningRevenue.ppc_requests (email);
create index if not exists seo_requests_created_at_idx on LightningRevenue.seo_requests (created_at desc);
create index if not exists seo_requests_email_idx on LightningRevenue.seo_requests (email);
create index if not exists web_development_requests_created_at_idx on LightningRevenue.web_development_requests (created_at desc);
create index if not exists web_development_requests_email_idx on LightningRevenue.web_development_requests (email);
create index if not exists software_development_requests_created_at_idx on LightningRevenue.software_development_requests (created_at desc);
create index if not exists software_development_requests_email_idx on LightningRevenue.software_development_requests (email);
create index if not exists ui_ux_requests_created_at_idx on LightningRevenue.ui_ux_requests (created_at desc);
create index if not exists ui_ux_requests_email_idx on LightningRevenue.ui_ux_requests (email);
create index if not exists smm_requests_created_at_idx on LightningRevenue.smm_requests (created_at desc);
create index if not exists smm_requests_email_idx on LightningRevenue.smm_requests (email);
create index if not exists sales_setup_requests_created_at_idx on LightningRevenue.sales_setup_requests (created_at desc);
create index if not exists sales_setup_requests_email_idx on LightningRevenue.sales_setup_requests (email);
create index if not exists lead_generation_requests_created_at_idx on LightningRevenue.lead_generation_requests (created_at desc);
create index if not exists lead_generation_requests_email_idx on LightningRevenue.lead_generation_requests (email);
