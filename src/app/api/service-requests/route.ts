import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";
import { recordLeadAttribution } from "@/lib/analytics-server";

export const runtime = "nodejs";

const serviceTables = {
  ppc: "ppc_requests",
  seo: "seo_requests",
  "web-development": "web_development_requests",
  "software-development": "software_development_requests",
  "ui-ux": "ui_ux_requests",
  smm: "smm_requests",
  "sales-setup": "sales_setup_requests",
  "lead-generation": "lead_generation_requests",
} as const;

type ServiceType = keyof typeof serviceTables;

type ServicePayload = {
  service?: unknown;
  name?: unknown;
  email?: unknown;
  challenge?: unknown;
  budget?: unknown;
  spend?: unknown;
  website?: unknown;
  appUrl?: unknown;
  socialUrl?: unknown;
  techStack?: unknown;
  teamSize?: unknown;
  crm?: unknown;
  volume?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readService(value: unknown): ServiceType | null {
  return typeof value === "string" && value in serviceTables ? (value as ServiceType) : null;
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

function requireFields(fields: Record<string, string>) {
  for (const [name, value] of Object.entries(fields)) {
    if (!value) {
      return `${name} is required.`;
    }
  }

  return null;
}

export async function POST(request: Request) {
  let payload: ServicePayload;

  try {
    payload = (await request.json()) as ServicePayload;
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const service = readService(payload.service);
  const name = readString(payload.name);
  const email = readString(payload.email).toLowerCase();
  const challenge = readString(payload.challenge);

  if (!service) {
    return badRequest("A valid service is required.");
  }

  if (!email.includes("@")) {
    return badRequest("A valid email is required.");
  }

  const commonError = requireFields({ name, email, challenge });
  if (commonError) {
    return badRequest(commonError);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");
  const schema = getDatabaseSchema();
  const table = serviceTables[service];

  const insert = async (columns: string[], values: string[]) => {
    const result = await getPool().query<{ id: string }>(
      `
        insert into ${schema}.${table} (
          ${columns.join(", ")},
          ip_address,
          user_agent
        )
        values (${values.map((_, index) => `$${index + 1}`).join(", ")}, $${values.length + 1}, $${values.length + 2})
        returning id
      `,
      [...values, ipAddress, userAgent],
    );

    await recordLeadAttribution({
      request,
      leadType: "service_request",
      leadId: result.rows[0].id,
    });

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  };

  if (service === "ppc") {
    const spend = readString(payload.spend);
    const website = readString(payload.website);
    const error = requireFields({ spend, website });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "spend", "website"], [name, email, challenge, spend, website]);
  }

  if (service === "seo" || service === "web-development") {
    const budget = readString(payload.budget);
    const website = readString(payload.website);
    const error = requireFields({ budget, website });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "budget", "website"], [name, email, challenge, budget, website]);
  }

  if (service === "software-development") {
    const budget = readString(payload.budget);
    const techStack = readString(payload.techStack);
    const error = requireFields({ budget, techStack });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "budget", "tech_stack"], [name, email, challenge, budget, techStack]);
  }

  if (service === "ui-ux") {
    const budget = readString(payload.budget);
    const appUrl = readString(payload.appUrl);
    const error = requireFields({ budget, appUrl });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "budget", "app_url"], [name, email, challenge, budget, appUrl]);
  }

  if (service === "smm") {
    const budget = readString(payload.budget);
    const socialUrl = readString(payload.socialUrl);
    const error = requireFields({ budget, socialUrl });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "budget", "social_url"], [name, email, challenge, budget, socialUrl]);
  }

  if (service === "sales-setup") {
    const teamSize = readString(payload.teamSize);
    const crm = readString(payload.crm);
    const error = requireFields({ teamSize, crm });
    if (error) return badRequest(error);
    return insert(["name", "email", "challenge", "team_size", "crm"], [name, email, challenge, teamSize, crm]);
  }

  const volume = readString(payload.volume);
  const techStack = readString(payload.techStack);
  const error = requireFields({ volume, techStack });
  if (error) return badRequest(error);
  return insert(["name", "email", "challenge", "volume", "tech_stack"], [name, email, challenge, volume, techStack]);
}
