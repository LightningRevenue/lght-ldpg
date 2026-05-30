import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSession,
  findAdminByUsername,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

type LoginPayload = {
  username?: unknown;
  password?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function unauthorized() {
  return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
}

export async function POST(request: Request) {
  let payload: LoginPayload;

  try {
    payload = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const username = readString(payload.username).toLowerCase();
  const password = readString(payload.password);

  if (!username || !password) {
    return unauthorized();
  }

  const admin = await findAdminByUsername(username);

  if (!admin) {
    return unauthorized();
  }

  const isValidPassword = await verifyAdminPassword(password, admin.password_hash);

  if (!isValidPassword) {
    return unauthorized();
  }

  const session = await createAdminSession(admin.id);
  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_SESSION_COOKIE, session.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: session.expiresAt,
    path: "/",
  });

  return response;
}
