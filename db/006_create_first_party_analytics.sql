create schema if not exists LightningRevenue;

create extension if not exists pgcrypto;

create table if not exists LightningRevenue.analytics_sessions (
  id uuid primary key default gen_random_uuid(),
  session_id text not null unique,
  visitor_id text,
  landing_page text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  user_agent text,
  ip_address text,
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists LightningRevenue.analytics_events (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  visitor_id text,
  event_name text not null,
  path text not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists LightningRevenue.analytics_lead_attribution (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null,
  lead_id uuid not null,
  session_id text,
  visitor_id text,
  landing_page text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  created_at timestamptz not null default now()
);

create index if not exists analytics_sessions_visitor_id_idx
  on LightningRevenue.analytics_sessions (visitor_id);

create index if not exists analytics_sessions_last_seen_at_idx
  on LightningRevenue.analytics_sessions (last_seen_at desc);

create index if not exists analytics_events_session_id_idx
  on LightningRevenue.analytics_events (session_id);

create index if not exists analytics_events_event_name_idx
  on LightningRevenue.analytics_events (event_name);

create index if not exists analytics_events_created_at_idx
  on LightningRevenue.analytics_events (created_at desc);

create index if not exists analytics_lead_attribution_lead_idx
  on LightningRevenue.analytics_lead_attribution (lead_type, lead_id);

create index if not exists analytics_lead_attribution_session_id_idx
  on LightningRevenue.analytics_lead_attribution (session_id);
