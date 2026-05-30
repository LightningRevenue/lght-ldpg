import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";

export const runtime = "nodejs";

type AnalyticsPayload = {
  sessionId?: unknown;
  visitorId?: unknown;
  eventName?: unknown;
  path?: unknown;
  landingPage?: unknown;
  referrer?: unknown;
  utm?: unknown;
  metadata?: unknown;
};

type UtmPayload = {
  source?: unknown;
  medium?: unknown;
  campaign?: unknown;
  content?: unknown;
  term?: unknown;
};

function readString(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function readMetadata(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value as Record<string, unknown>;
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: AnalyticsPayload;

  try {
    payload = (await request.json()) as AnalyticsPayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const sessionId = readString(payload.sessionId, 120);
  const visitorId = readString(payload.visitorId, 120);
  const eventName = readString(payload.eventName, 120);
  const path = readString(payload.path, 1000);
  const landingPage = readString(payload.landingPage, 1000);
  const referrer = readString(payload.referrer, 1000);
  const utm = (payload.utm && typeof payload.utm === "object" ? payload.utm : {}) as UtmPayload;
  const metadata = readMetadata(payload.metadata);

  if (!sessionId || !eventName || !path) {
    return badRequest("sessionId, eventName, and path are required.");
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");
  const schema = getDatabaseSchema();

  await getPool().query(
    `
      insert into ${schema}.analytics_sessions as analytics_sessions (
        session_id,
        visitor_id,
        landing_page,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        user_agent,
        ip_address,
        last_seen_at
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, now())
      on conflict (session_id) do update set
        visitor_id = coalesce(excluded.visitor_id, analytics_sessions.visitor_id),
        last_seen_at = now()
    `,
    [
      sessionId,
      visitorId || null,
      landingPage || null,
      referrer || null,
      readString(utm.source, 300) || null,
      readString(utm.medium, 300) || null,
      readString(utm.campaign, 300) || null,
      readString(utm.content, 300) || null,
      readString(utm.term, 300) || null,
      userAgent,
      ipAddress,
    ],
  );

  const result = await getPool().query<{ id: string }>(
    `
      insert into ${schema}.analytics_events (
        session_id,
        visitor_id,
        event_name,
        path,
        metadata
      )
      values ($1, $2, $3, $4, $5)
      returning id
    `,
    [sessionId, visitorId || null, eventName, path, metadata],
  );

  return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
}
