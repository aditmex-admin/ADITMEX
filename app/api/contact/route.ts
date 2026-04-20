import { Resend } from "resend";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { CONTACT_EMAIL } from "@/lib/constants";

// ── Rate limiting ────────────────────────────────────────────────────────────
const RATE_LIMIT = 5;
const WINDOW_MS = 5 * 60 * 1000; // 5 minutos

const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta en unos minutos." },
      { status: 429 }
    );
  }

  const { nombre, empresa, correo, mensaje, website } = await req.json();

  // ── Honeypot: si viene relleno es un bot; fingimos éxito sin enviar ────────
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json({ error: "Campos requeridos incompletos" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return NextResponse.json({ error: "Correo electrónico inválido" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "ADITMEX Web <no-reply@aditmex.com.mx>",
    to: [CONTACT_EMAIL],
    replyTo: correo,
    subject: `Nuevo mensaje de ${nombre}${empresa ? ` — ${empresa}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#27274D;margin-bottom:4px">Nuevo mensaje desde aditmex.com.mx</h2>
        <hr style="border:none;border-top:2px solid #C4AC4D;margin-bottom:24px"/>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6B7280;width:120px">Nombre</td><td style="padding:8px 0;font-weight:600">${nombre}</td></tr>
          ${empresa ? `<tr><td style="padding:8px 0;color:#6B7280">Empresa</td><td style="padding:8px 0;font-weight:600">${empresa}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6B7280">Correo</td><td style="padding:8px 0"><a href="mailto:${correo}" style="color:#C4AC4D">${correo}</a></td></tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#F8F8F8;border-radius:8px;border-left:3px solid #C4AC4D">
          <p style="margin:0;color:#1A1A2E;white-space:pre-wrap">${mensaje}</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
