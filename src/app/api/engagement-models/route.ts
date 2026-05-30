import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";
import { helpServiceIds } from "@/lib/help-data";
import { recordLeadAttribution } from "@/lib/analytics-server";

export const runtime = "nodejs";

const validServiceIds = new Set<string>(helpServiceIds);
const validFoundationServiceIds = new Set(["f-web", "f-seo", "f-ppc", "f-uiux", "f-smm"]);
const validExpertiseIds = new Set(["sla", "account", "response", "resolution", "hosting"]);

const modelTables = {
  foundation: "foundation_requests",
  momentum: "momentum_requests",
  apex: "apex_requests",
  custom: "custom_package_requests",
} as const;

type EngagementModel = keyof typeof modelTables;

type EngagementPayload = {
  model?: unknown;
  name?: unknown;
  email?: unknown;
  company?: unknown;
  selectedPainPoints?: unknown;
  selectedOutcomes?: unknown;
  selectedServices?: unknown;
  selectedExpertise?: unknown;
  selectedFoundationServices?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readIds(value: unknown, validIds: Set<string>) {
  if (!Array.isArray(value)) {
    return [];
  }

  return Array.from(
    new Set(value.filter((id): id is string => typeof id === "string" && validIds.has(id))),
  );
}

function readModel(value: unknown): EngagementModel | null {
  return typeof value === "string" && value in modelTables ? (value as EngagementModel) : null;
}

export async function POST(request: Request) {
  let payload: EngagementPayload;

  try {
    payload = (await request.json()) as EngagementPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const model = readModel(payload.model);
  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const company = readString(payload.company);

  if (!model) {
    return NextResponse.json({ error: "A valid engagement model is required." }, { status: 400 });
  }

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
  const table = modelTables[model];

  if (model === "foundation") {
    const selectedFoundationServices = readIds(
      payload.selectedFoundationServices,
      validFoundationServiceIds,
    );

    const result = await getPool().query<{ id: string }>(
      `
        insert into ${schema}.${table} (
          name,
          email,
          company,
          selected_foundation_services,
          ip_address,
          user_agent
        )
        values ($1, $2, $3, $4, $5, $6)
        returning id
      `,
      [name, email, company || null, selectedFoundationServices, ipAddress, userAgent],
    );

    await recordLeadAttribution({
      request,
      leadType: "engagement_model",
      leadId: result.rows[0].id,
    });

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  }

  if (model === "custom") {
    const selectedPainPoints = readIds(payload.selectedPainPoints, validServiceIds);
    const selectedOutcomes = readIds(payload.selectedOutcomes, validServiceIds);
    const selectedServices = readIds(payload.selectedServices, validServiceIds);
    const selectedExpertise = readIds(payload.selectedExpertise, validExpertiseIds);

    const result = await getPool().query<{ id: string }>(
      `
        insert into ${schema}.${table} (
          name,
          email,
          company,
          selected_pain_points,
          selected_outcomes,
          selected_services,
          selected_expertise,
          ip_address,
          user_agent
        )
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        returning id
      `,
      [
        name,
        email,
        company || null,
        selectedPainPoints,
        selectedOutcomes,
        selectedServices,
        selectedExpertise,
        ipAddress,
        userAgent,
      ],
    );

    await recordLeadAttribution({
      request,
      leadType: "engagement_model",
      leadId: result.rows[0].id,
    });

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  }

  const result = await getPool().query<{ id: string }>(
    `
      insert into ${schema}.${table} (
        name,
        email,
        company,
        ip_address,
        user_agent
      )
      values ($1, $2, $3, $4, $5)
      returning id
    `,
    [name, email, company || null, ipAddress, userAgent],
  );

  await recordLeadAttribution({
    request,
    leadType: "engagement_model",
    leadId: result.rows[0].id,
  });

  return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
}
