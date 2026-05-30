import { NextResponse } from "next/server";
import { getDatabaseSchema, getPool } from "@/lib/db";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    publicId: string;
  }>;
};

type AssetRow = {
  image_data: Buffer;
  content_type: string;
  file_name: string;
};

export async function GET(_request: Request, context: RouteContext) {
  const { publicId } = await context.params;

  if (!/^[a-zA-Z0-9_-]{12,80}$/.test(publicId)) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const schema = getDatabaseSchema();
  const result = await getPool().query<AssetRow>(
    `
      select image_data, content_type, file_name
      from ${schema}.signature_assets
      where public_id = $1
      limit 1
    `,
    [publicId],
  );

  const asset = result.rows[0];

  if (!asset) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return new Response(new Uint8Array(asset.image_data), {
    headers: {
      "Content-Type": asset.content_type,
      "Content-Length": String(asset.image_data.length),
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": `inline; filename="${asset.file_name.replaceAll('"', "")}"`,
    },
  });
}
