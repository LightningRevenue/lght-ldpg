import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";
import { recordLeadAttribution } from "@/lib/analytics-server";

export const runtime = "nodejs";

type NewsletterPayload = {
  email?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const email = readString(payload.email).toLowerCase();

  if (!email || !email.includes("@")) {
    return badRequest("A valid email is required.");
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");
  const schema = getDatabaseSchema();

  const result = await getPool().query<{ id: string }>(
    `
      insert into ${schema}.newsletter_approved (
        email,
        ip_address,
        user_agent
      )
      values ($1, $2, $3)
      on conflict (email) do update set
        ip_address = excluded.ip_address,
        user_agent = excluded.user_agent
      returning id
    `,
    [email, ipAddress, userAgent],
  );

  await recordLeadAttribution({
    request,
    leadType: "newsletter",
    leadId: result.rows[0].id,
  });

  return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
}
