import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { getDatabaseSchema, getPool } from "@/lib/db";

export const runtime = "nodejs";

const allowedContentTypes = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const maxFileSize = 2 * 1024 * 1024;

function readText(value: FormDataEntryValue | null, maxLength = 180) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function readNumber(value: FormDataEntryValue | null) {
  const rawValue = readText(value, 10);
  const number = Number(rawValue);

  return Number.isFinite(number) ? Math.round(number) : 0;
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const name = readText(formData.get("name"));
  const altText = readText(formData.get("altText"));
  const displayWidth = readNumber(formData.get("displayWidth"));
  const displayHeight = readNumber(formData.get("displayHeight"));

  if (!(file instanceof File)) {
    return badRequest("Image file is required.");
  }

  if (!allowedContentTypes.has(file.type)) {
    return badRequest("Only PNG, JPEG, WebP, and GIF files are supported.");
  }

  if (file.size <= 0 || file.size > maxFileSize) {
    return badRequest("Image must be between 1 byte and 2 MB.");
  }

  if (!displayWidth || displayWidth < 8 || displayWidth > 1200) {
    return badRequest("Display width must be between 8 and 1200 pixels.");
  }

  if (displayHeight && (displayHeight < 8 || displayHeight > 1200)) {
    return badRequest("Display height must be empty or between 8 and 1200 pixels.");
  }

  const schema = getDatabaseSchema();
  const publicId = randomBytes(16).toString("base64url");
  const imageData = Buffer.from(await file.arrayBuffer());

  const result = await getPool().query<{ id: string; public_id: string }>(
    `
      insert into ${schema}.signature_assets (
        public_id,
        name,
        alt_text,
        file_name,
        content_type,
        file_size,
        display_width,
        display_height,
        image_data,
        created_by
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      returning id, public_id
    `,
    [
      publicId,
      name || file.name,
      altText || null,
      file.name,
      file.type,
      file.size,
      displayWidth,
      displayHeight || null,
      imageData,
      admin.id,
    ],
  );

  return NextResponse.json(
    {
      id: result.rows[0].id,
      publicId: result.rows[0].public_id,
      url: `/api/signature-assets/${result.rows[0].public_id}`,
    },
    { status: 201 },
  );
}
