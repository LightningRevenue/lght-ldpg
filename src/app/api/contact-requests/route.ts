import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";
import { recordLeadAttribution } from "@/lib/analytics-server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const company = readString(payload.company);
  const service = readString(payload.service);
  const budget = readString(payload.budget);
  const timeline = readString(payload.timeline);
  const message = readString(payload.message);

  if (!name || !email || !service || !budget || !timeline || !message) {
    return badRequest("Name, email, service, budget, timeline, and message are required.");
  }

  if (!email.includes("@")) {
    return badRequest("A valid email is required.");
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");
  const schema = getDatabaseSchema();

  const result = await getPool().query<{ id: string }>(
    `
      insert into ${schema}.contact_requests (
        name,
        email,
        company,
        service,
        budget,
        timeline,
        message,
        ip_address,
        user_agent
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning id
    `,
    [name, email, company || null, service, budget, timeline, message, ipAddress, userAgent],
  );

  await recordLeadAttribution({
    request,
    leadType: "contact",
    leadId: result.rows[0].id,
  });

  return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
}
