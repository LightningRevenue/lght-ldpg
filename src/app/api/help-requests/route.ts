import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";
import { helpServiceIds } from "@/lib/help-data";
import { recordLeadAttribution } from "@/lib/analytics-server";

export const runtime = "nodejs";

const validServiceIds = new Set<string>(helpServiceIds);

type HelpRequestPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  selectedPainPoints?: unknown;
  selectedOutcomes?: unknown;
  finalServices?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readServiceIds(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(value.filter((id): id is string => typeof id === "string" && validServiceIds.has(id))),
  );
}

export async function POST(request: Request) {
  let payload: HelpRequestPayload;

  try {
    payload = (await request.json()) as HelpRequestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const company = readString(payload.company);
  const selectedPainPoints = readServiceIds(payload.selectedPainPoints);
  const selectedOutcomes = readServiceIds(payload.selectedOutcomes);
  const finalServices = readServiceIds(payload.finalServices);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");
  const schema = getDatabaseSchema();

  const result = await getPool().query<{ id: string }>(
    `
      insert into ${schema}.help_requests (
        name,
        email,
        company,
        selected_pain_points,
        selected_outcomes,
        selected_services,
        ip_address,
        user_agent
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8)
      returning id
    `,
    [
      name,
      email,
      company || null,
      selectedPainPoints,
      selectedOutcomes,
      finalServices,
      ipAddress,
      userAgent,
    ],
  );

  await recordLeadAttribution({
    request,
    leadType: "help_popup",
    leadId: result.rows[0].id,
  });

  return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
}
