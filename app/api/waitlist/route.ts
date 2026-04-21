import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

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

  const supabase = getSupabaseAdmin();

  // Fallback gracioso: se Supabase não está configurado, aceita mas loga.
  // Assim a landing funciona no primeiro deploy enquanto Gabriel conecta as envs.
  if (!supabase) {
    console.log("[waitlist] Supabase não configurado. Email recebido:", email);
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, source });

  if (error) {
    // 23505 = unique violation (email já cadastrado) — tratar como sucesso.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, stored: true, duplicate: true });
    }

    console.error("[waitlist] erro supabase:", error);
    return NextResponse.json(
      { ok: false, error: "Não conseguimos salvar agora. Tente de novo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
