import { NextResponse } from "next/server";
import { sql } from "@/lib/neon";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string; source?: string } = {};

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload inválido." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const source = (body.source ?? "landing").toString().slice(0, 64);

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Informe um email válido." },
      { status: 400 }
    );
  }

  // Fallback gracioso: sem DATABASE_URL, aceita mas só loga.
  if (!process.env.DATABASE_URL) {
    console.log("[waitlist] DATABASE_URL não configurado. Email recebido:", email);
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    await sql`
      INSERT INTO waitlist (email, source)
      VALUES (${email}, ${source})
      ON CONFLICT (email) DO NOTHING
    `;
    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[waitlist] erro neon:", err);
    return NextResponse.json(
      { ok: false, error: "Não conseguimos salvar agora. Tente de novo." },
      { status: 500 }
    );
  }
}
