import React from 'react';
import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/admin-auth';
import { getDatabaseSchema, getPool } from '@/lib/db';
import AdminAnalyticsExplorer, {
  type AnalyticsExplorerDay,
  type AnalyticsExplorerSession,
} from './AdminAnalyticsExplorer';
import LogoutButton from './LogoutButton';

export const metadata: Metadata = {
  title: 'Admin | LightningRevenue',
  description: 'LightningRevenue admin dashboard.',
};

type CountRow = {
  label: string;
  count: string;
};

type RecentLead = {
  source: string;
  name: string | null;
  email: string | null;
  detail: string | null;
  created_at: Date;
};

type AnalyticsMetric = {
  label: string;
  value: string;
  context: string;
};

type TopPage = {
  path: string;
  views: string;
  visitors: string;
};

type AcquisitionSource = {
  source: string;
  sessions: string;
  leads: string;
};

type RecentSession = {
  session_id: string;
  visitor_id: string | null;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  started_at: Date;
  last_seen_at: Date;
  event_count: string;
};

type RecentEvent = {
  event_name: string;
  path: string;
  created_at: Date;
  session_id: string;
};

type LeadAttribution = {
  lead_type: string;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  created_at: Date;
};

type DailyAnalytics = {
  day: Date;
  sessions: string;
  page_views: string;
  leads: string;
};

type AnalyticsExplorerRow = {
  session_id: string;
  started_day: string;
  visitor_id: string | null;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  started_at: Date;
  last_seen_at: Date;
  event_count: string;
  lead_count: string;
  lead_types: string | null;
  event_id: string | null;
  event_name: string | null;
  event_path: string | null;
  event_created_at: Date | null;
  event_metadata: Record<string, unknown> | null;
};

function numberValue(value: string) {
  return Number(value) || 0;
}

function maxValue<T>(rows: T[], readValue: (row: T) => string) {
  return Math.max(1, ...rows.map(row => numberValue(readValue(row))));
}

function percentOf(value: string, max: number) {
  return `${Math.max(4, Math.round((numberValue(value) / max) * 100))}%`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

async function getDashboardData() {
  const schema = getDatabaseSchema();
  const pool = getPool();

  const [
    countsResult,
    recentLeadsResult,
    analyticsMetricsResult,
    topPagesResult,
    acquisitionResult,
    recentSessionsResult,
    recentEventsResult,
    leadAttributionResult,
    dailyAnalyticsResult,
    analyticsExplorerResult,
  ] = await Promise.all([
    pool.query<CountRow>(
      `
        select 'Contact' as label, count(*)::text as count from ${schema}.contact_requests
        union all
        select 'Help popup' as label, count(*)::text as count from ${schema}.help_requests
        union all
        select 'Foundation' as label, count(*)::text as count from ${schema}.foundation_requests
        union all
        select 'Momentum' as label, count(*)::text as count from ${schema}.momentum_requests
        union all
        select 'Apex' as label, count(*)::text as count from ${schema}.apex_requests
        union all
        select 'Custom package' as label, count(*)::text as count from ${schema}.custom_package_requests
        union all
        select 'Service requests' as label, (
          (select count(*) from ${schema}.ppc_requests)
          + (select count(*) from ${schema}.seo_requests)
          + (select count(*) from ${schema}.web_development_requests)
          + (select count(*) from ${schema}.software_development_requests)
          + (select count(*) from ${schema}.ui_ux_requests)
          + (select count(*) from ${schema}.smm_requests)
          + (select count(*) from ${schema}.sales_setup_requests)
          + (select count(*) from ${schema}.lead_generation_requests)
        )::text as count
        union all
        select 'Newsletter' as label, count(*)::text as count from ${schema}.newsletter_approved
        union all
        select 'Analytics events' as label, count(*)::text as count from ${schema}.analytics_events
      `
    ),
    pool.query<RecentLead>(
      `
        select 'Contact' as source, name, email, service as detail, created_at
        from ${schema}.contact_requests
        union all
        select 'Help popup' as source, name, email, selected_services::text as detail, created_at
        from ${schema}.help_requests
        union all
        select 'Foundation' as source, name, email, selected_foundation_services::text as detail, created_at
        from ${schema}.foundation_requests
        union all
        select 'Momentum' as source, name, email, company as detail, created_at
        from ${schema}.momentum_requests
        union all
        select 'Apex' as source, name, email, company as detail, created_at
        from ${schema}.apex_requests
        union all
        select 'Custom package' as source, name, email, selected_services::text as detail, created_at
        from ${schema}.custom_package_requests
        union all
        select 'PPC' as source, name, email, spend as detail, created_at
        from ${schema}.ppc_requests
        union all
        select 'SEO' as source, name, email, budget as detail, created_at
        from ${schema}.seo_requests
        union all
        select 'Web development' as source, name, email, budget as detail, created_at
        from ${schema}.web_development_requests
        union all
        select 'Software development' as source, name, email, budget as detail, created_at
        from ${schema}.software_development_requests
        union all
        select 'UI/UX' as source, name, email, budget as detail, created_at
        from ${schema}.ui_ux_requests
        union all
        select 'SMM' as source, name, email, budget as detail, created_at
        from ${schema}.smm_requests
        union all
        select 'Sales setup' as source, name, email, team_size as detail, created_at
        from ${schema}.sales_setup_requests
        union all
        select 'Lead generation' as source, name, email, volume as detail, created_at
        from ${schema}.lead_generation_requests
        union all
        select 'Newsletter' as source, null as name, email, null as detail, created_at
        from ${schema}.newsletter_approved
        order by created_at desc
        limit 12
      `
    ),
    pool.query<AnalyticsMetric>(
      `
        select 'Sessions' as label, count(*)::text as value, 'All tracked visits' as context
        from ${schema}.analytics_sessions
        union all
        select 'Visitors' as label, count(distinct visitor_id)::text as value, 'Unique visitor cookies' as context
        from ${schema}.analytics_sessions
        where visitor_id is not null
        union all
        select 'Page views' as label, count(*)::text as value, 'Tracked page_view events' as context
        from ${schema}.analytics_events
        where event_name = 'page_view'
        union all
        select 'Attributed leads' as label, count(*)::text as value, 'Leads tied to consented sessions' as context
        from ${schema}.analytics_lead_attribution
        union all
        select '24h sessions' as label, count(*)::text as value, 'New sessions today' as context
        from ${schema}.analytics_sessions
        where started_at >= now() - interval '24 hours'
        union all
        select '24h events' as label, count(*)::text as value, 'Tracked events today' as context
        from ${schema}.analytics_events
        where created_at >= now() - interval '24 hours'
      `
    ),
    pool.query<TopPage>(
      `
        select
          path,
          count(*)::text as views,
          count(distinct coalesce(visitor_id, session_id))::text as visitors
        from ${schema}.analytics_events
        where event_name = 'page_view'
          and created_at >= now() - interval '30 days'
        group by path
        order by count(*) desc
        limit 8
      `
    ),
    pool.query<AcquisitionSource>(
      `
        with sessions as (
          select
            session_id,
            case
              when nullif(utm_source, '') is not null then utm_source
              when nullif(referrer, '') is not null then referrer
              else 'Direct'
            end as source
          from ${schema}.analytics_sessions
          where started_at >= now() - interval '30 days'
        )
        select
          sessions.source,
          count(*)::text as sessions,
          count(analytics_lead_attribution.id)::text as leads
        from sessions
        left join ${schema}.analytics_lead_attribution on analytics_lead_attribution.session_id = sessions.session_id
        group by sessions.source
        order by count(*) desc
        limit 8
      `
    ),
    pool.query<RecentSession>(
      `
        select
          analytics_sessions.session_id,
          analytics_sessions.visitor_id,
          analytics_sessions.landing_page,
          analytics_sessions.referrer,
          analytics_sessions.utm_source,
          analytics_sessions.utm_medium,
          analytics_sessions.utm_campaign,
          analytics_sessions.started_at,
          analytics_sessions.last_seen_at,
          count(analytics_events.id)::text as event_count
        from ${schema}.analytics_sessions
        left join ${schema}.analytics_events on analytics_events.session_id = analytics_sessions.session_id
        group by analytics_sessions.id
        order by analytics_sessions.last_seen_at desc
        limit 10
      `
    ),
    pool.query<RecentEvent>(
      `
        select event_name, path, created_at, session_id
        from ${schema}.analytics_events
        order by created_at desc
        limit 10
      `
    ),
    pool.query<LeadAttribution>(
      `
        select lead_type, landing_page, referrer, utm_source, utm_campaign, created_at
        from ${schema}.analytics_lead_attribution
        order by created_at desc
        limit 10
      `
    ),
    pool.query<DailyAnalytics>(
      `
        with days as (
          select generate_series(
            date_trunc('day', now()) - interval '13 days',
            date_trunc('day', now()),
            interval '1 day'
          ) as day
        )
        select
          days.day,
          (
            select count(*)
            from ${schema}.analytics_sessions
            where analytics_sessions.started_at >= days.day
              and analytics_sessions.started_at < days.day + interval '1 day'
          )::text as sessions,
          (
            select count(*)
            from ${schema}.analytics_events
            where analytics_events.event_name = 'page_view'
              and analytics_events.created_at >= days.day
              and analytics_events.created_at < days.day + interval '1 day'
          )::text as page_views,
          (
            select count(*)
            from ${schema}.analytics_lead_attribution
            where analytics_lead_attribution.created_at >= days.day
              and analytics_lead_attribution.created_at < days.day + interval '1 day'
          )::text as leads
        from days
        order by days.day asc
      `
    ),
    pool.query<AnalyticsExplorerRow>(
      `
        with lead_rollup as (
          select
            session_id,
            count(*)::text as lead_count,
            string_agg(distinct lead_type, ', ' order by lead_type) as lead_types
          from ${schema}.analytics_lead_attribution
          where session_id is not null
          group by session_id
        ),
        event_rollup as (
          select session_id, count(*)::text as event_count
          from ${schema}.analytics_events
          group by session_id
        )
        select
          analytics_sessions.session_id,
          to_char(analytics_sessions.started_at, 'YYYY-MM-DD') as started_day,
          analytics_sessions.visitor_id,
          analytics_sessions.landing_page,
          analytics_sessions.referrer,
          analytics_sessions.utm_source,
          analytics_sessions.utm_medium,
          analytics_sessions.utm_campaign,
          analytics_sessions.started_at,
          analytics_sessions.last_seen_at,
          coalesce(event_rollup.event_count, '0') as event_count,
          coalesce(lead_rollup.lead_count, '0') as lead_count,
          lead_rollup.lead_types,
          analytics_events.id as event_id,
          analytics_events.event_name,
          analytics_events.path as event_path,
          analytics_events.created_at as event_created_at,
          analytics_events.metadata as event_metadata
        from ${schema}.analytics_sessions
        left join event_rollup on event_rollup.session_id = analytics_sessions.session_id
        left join lead_rollup on lead_rollup.session_id = analytics_sessions.session_id
        left join ${schema}.analytics_events on analytics_events.session_id = analytics_sessions.session_id
        where analytics_sessions.started_at >= date_trunc('day', now()) - interval '13 days'
        order by analytics_sessions.started_at desc, analytics_events.created_at asc
      `
    ),
  ]);

  const explorerSessionMap = new Map<string, AnalyticsExplorerSession>();

  for (const row of analyticsExplorerResult.rows) {
    const existingSession = explorerSessionMap.get(row.session_id);
    const session =
      existingSession ||
      ({
        sessionId: row.session_id,
        startedDay: row.started_day,
        visitorId: row.visitor_id,
        landingPage: row.landing_page,
        referrer: row.referrer,
        utmSource: row.utm_source,
        utmMedium: row.utm_medium,
        utmCampaign: row.utm_campaign,
        startedAt: row.started_at.toISOString(),
        lastSeenAt: row.last_seen_at.toISOString(),
        eventCount: row.event_count,
        leadCount: row.lead_count,
        leadTypes: row.lead_types,
        events: [],
      } satisfies AnalyticsExplorerSession);

    if (!existingSession) {
      explorerSessionMap.set(row.session_id, session);
    }

    if (
      row.event_id &&
      row.event_name &&
      row.event_path &&
      row.event_created_at
    ) {
      session.events.push({
        id: row.event_id,
        eventName: row.event_name,
        path: row.event_path,
        createdAt: row.event_created_at.toISOString(),
        metadata: row.event_metadata || {},
      });
    }
  }

  return {
    counts: countsResult.rows,
    recentLeads: recentLeadsResult.rows,
    analyticsMetrics: analyticsMetricsResult.rows,
    topPages: topPagesResult.rows,
    acquisition: acquisitionResult.rows,
    recentSessions: recentSessionsResult.rows,
    recentEvents: recentEventsResult.rows,
    leadAttribution: leadAttributionResult.rows,
    dailyAnalytics: dailyAnalyticsResult.rows,
    analyticsExplorerDays: dailyAnalyticsResult.rows.map<AnalyticsExplorerDay>(
      day => ({
        day: day.day.toISOString().slice(0, 10),
        sessions: day.sessions,
        pageViews: day.page_views,
        leads: day.leads,
      })
    ),
    analyticsExplorerSessions: Array.from(explorerSessionMap.values()),
  };
}

export default async function AdminPage() {
  const admin = await requireAdmin();
  const dashboard = await getDashboardData();

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 pt-36 pb-24 text-black">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
              Signed in as {admin.username}
            </div>
            <h1 className="text-5xl font-medium tracking-[-0.04em] text-[#2f5b7c] sm:text-7xl">
              Admin dashboard
            </h1>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboard.counts.map(item => (
            <div
              key={item.label}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
                {item.label}
              </div>
              <div className="mt-6 text-4xl font-medium tracking-tight text-black">
                {item.count}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-[2rem] border border-black/10 bg-[#050505] p-4 text-white sm:p-6">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
                First-party analytics
              </div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Tracked sessions and attribution
              </h2>
            </div>
            <span className="text-sm text-white/45">
              Only users who accepted analytics cookies are tracked.
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {dashboard.analyticsMetrics.map(metric => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  {metric.label}
                </div>
                <div className="mt-5 text-3xl font-medium tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs text-white/35">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>

          <AdminAnalyticsExplorer
            days={dashboard.analyticsExplorerDays}
            sessions={dashboard.analyticsExplorerSessions}
          />
        </section>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium tracking-tight text-black">
                Top pages
              </h2>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
                30 days
              </span>
            </div>
            <div className="space-y-4">
              {dashboard.topPages.map(page => {
                const maxViews = maxValue(
                  dashboard.topPages,
                  item => item.views
                );

                return (
                  <div key={page.path}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="truncate font-medium text-black">
                        {page.path}
                      </span>
                      <span className="shrink-0 text-black/45">
                        {page.views} views / {page.visitors} visitors
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-black/5">
                      <div
                        className="h-full rounded-full bg-[#2f5b7c]"
                        style={{ width: percentOf(page.views, maxViews) }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              {dashboard.topPages.length === 0 && (
                <div className="py-8 text-center text-sm text-black/45">
                  No page views yet.
                </div>
              )}
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium tracking-tight text-black">
                Acquisition
              </h2>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
                30 days
              </span>
            </div>
            <div className="space-y-4">
              {dashboard.acquisition.map(source => {
                const maxSessions = maxValue(
                  dashboard.acquisition,
                  item => item.sessions
                );

                return (
                  <div key={source.source}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="truncate font-medium text-black">
                        {source.source}
                      </span>
                      <span className="shrink-0 text-black/45">
                        {source.sessions} sessions / {source.leads} leads
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-black/5">
                      <div
                        className="h-full rounded-full bg-black"
                        style={{
                          width: percentOf(source.sessions, maxSessions),
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              {dashboard.acquisition.length === 0 && (
                <div className="py-8 text-center text-sm text-black/45">
                  No sources yet.
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium tracking-tight text-black">
                Recent sessions
              </h2>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
                Latest 10
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-[11px] uppercase tracking-[0.18em] text-black/35">
                    <th className="py-4 pr-5 font-bold">Landing</th>
                    <th className="py-4 pr-5 font-bold">Source</th>
                    <th className="py-4 pr-5 font-bold">Campaign</th>
                    <th className="py-4 pr-5 font-bold">Events</th>
                    <th className="py-4 font-bold">Last seen</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboard.recentSessions.map(session => (
                    <tr
                      key={session.session_id}
                      className="border-b border-black/5 last:border-b-0"
                    >
                      <td className="max-w-72 truncate py-4 pr-5 font-medium text-black">
                        {session.landing_page || '-'}
                      </td>
                      <td className="max-w-72 truncate py-4 pr-5 text-black/60">
                        {session.utm_source || session.referrer || 'Direct'}
                      </td>
                      <td className="max-w-48 truncate py-4 pr-5 text-black/60">
                        {session.utm_campaign || session.utm_medium || '-'}
                      </td>
                      <td className="py-4 pr-5 text-black/60">
                        {session.event_count}
                      </td>
                      <td className="py-4 text-black/45">
                        {formatDate(session.last_seen_at)}
                      </td>
                    </tr>
                  ))}
                  {dashboard.recentSessions.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-10 text-center text-black/45"
                      >
                        No sessions yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium tracking-tight text-black">
                Recent events
              </h2>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
                Live trail
              </span>
            </div>
            <div className="space-y-3">
              {dashboard.recentEvents.map((event, index) => (
                <div
                  key={`${event.session_id}-${event.created_at.toISOString()}-${index}`}
                  className="rounded-2xl border border-black/5 bg-[#fafafa] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-black">
                      {event.event_name}
                    </span>
                    <span className="text-xs text-black/35">
                      {formatDate(event.created_at)}
                    </span>
                  </div>
                  <div className="mt-2 truncate text-sm text-black/55">
                    {event.path}
                  </div>
                </div>
              ))}
              {dashboard.recentEvents.length === 0 && (
                <div className="py-8 text-center text-sm text-black/45">
                  No events yet.
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-tight text-black">
              Lead attribution
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
              Latest 10
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 text-[11px] uppercase tracking-[0.18em] text-black/35">
                  <th className="py-4 pr-5 font-bold">Lead</th>
                  <th className="py-4 pr-5 font-bold">Landing</th>
                  <th className="py-4 pr-5 font-bold">Source</th>
                  <th className="py-4 pr-5 font-bold">Campaign</th>
                  <th className="py-4 font-bold">Created</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.leadAttribution.map((lead, index) => (
                  <tr
                    key={`${lead.lead_type}-${lead.created_at.toISOString()}-${index}`}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <td className="py-4 pr-5 font-medium text-black">
                      {lead.lead_type}
                    </td>
                    <td className="max-w-72 truncate py-4 pr-5 text-black/60">
                      {lead.landing_page || '-'}
                    </td>
                    <td className="max-w-72 truncate py-4 pr-5 text-black/60">
                      {lead.utm_source || lead.referrer || 'Direct'}
                    </td>
                    <td className="max-w-48 truncate py-4 pr-5 text-black/60">
                      {lead.utm_campaign || '-'}
                    </td>
                    <td className="py-4 text-black/45">
                      {formatDate(lead.created_at)}
                    </td>
                  </tr>
                ))}
                {dashboard.leadAttribution.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-black/45">
                      No attributed leads yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-tight text-black">
              Recent leads
            </h2>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
              Latest 12
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 text-[11px] uppercase tracking-[0.18em] text-black/35">
                  <th className="py-4 pr-5 font-bold">Source</th>
                  <th className="py-4 pr-5 font-bold">Name</th>
                  <th className="py-4 pr-5 font-bold">Email</th>
                  <th className="py-4 pr-5 font-bold">Detail</th>
                  <th className="py-4 font-bold">Created</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.recentLeads.map((lead, index) => (
                  <tr
                    key={`${lead.source}-${lead.email}-${lead.created_at.toISOString()}-${index}`}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <td className="py-4 pr-5 font-medium text-black">
                      {lead.source}
                    </td>
                    <td className="py-4 pr-5 text-black/60">
                      {lead.name || '-'}
                    </td>
                    <td className="py-4 pr-5 text-black/60">
                      {lead.email || '-'}
                    </td>
                    <td className="py-4 pr-5 text-black/60">
                      {lead.detail || '-'}
                    </td>
                    <td className="py-4 text-black/45">
                      {new Intl.DateTimeFormat('en', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }).format(lead.created_at)}
                    </td>
                  </tr>
                ))}
                {dashboard.recentLeads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-black/45">
                      No leads yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
