"use client";

import { useState, useEffect } from "react";
import { LogoMark } from "@/components/web/logo-mark";
import {
  Lock,
  Globe,
  Mail,
  GitBranch,
  Send,
  Server,
  Code2,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  Info,
} from "lucide-react";

const PASSWORD = "aditmex";

type Section = {
  icon: React.ElementType;
  title: string;
  badge: string;
  url?: string;
  rows: { label: string; value: string }[];
  warnings?: string[];
};

const SECTIONS: Section[] = [
  {
    icon: Globe,
    title: "Dominio",
    badge: "Hostinger",
    url: "https://hpanel.hostinger.com/domains",
    rows: [
      { label: "Proveedor", value: "Hostinger" },
      { label: "Dominio registrado", value: "aditmex.com.mx" },
      { label: "Renovación", value: "Anual — revisar fecha de vencimiento en el panel" },
      { label: "DNS administrados en", value: "Hostinger — zona DNS del dominio" },
      { label: "Registros activos", value: "MX (Google Workspace) · TXT/DKIM (Resend) · A/CNAME (Vercel)" },
    ],
    warnings: [
      "No elimines ni modifiques ningún registro DNS sin consultar primero. Eliminar los registros MX corta el correo, eliminar los de Resend rompe el formulario y eliminar los de Vercel baja el sitio.",
    ],
  },
  {
    icon: Mail,
    title: "Correo corporativo",
    badge: "Google Workspace · Hostinger",
    url: "https://hpanel.hostinger.com",
    rows: [
      { label: "Proveedor", value: "Google Workspace (Business Starter)" },
      { label: "Contratado a través de", value: "Hostinger — la suscripción se gestiona desde el panel de Hostinger" },
      { label: "Correo activo", value: "ventas@aditmex.com.mx" },
      { label: "Dónde administrarlo", value: "hpanel.hostinger.com → Google Workspace" },
      { label: "Renovación", value: "Se gestiona junto con el plan de Hostinger" },
      { label: "MX configurados en", value: "Hostinger — apuntan automáticamente a los servidores de Google" },
    ],
    warnings: [
      "No toques los registros MX en Hostinger. Si se eliminan o modifican, el correo ventas@aditmex.com.mx deja de recibir mensajes de inmediato.",
    ],
  },
  {
    icon: Send,
    title: "Envío del formulario de contacto",
    badge: "Resend",
    url: "https://resend.com/emails",
    rows: [
      { label: "Dominio verificado", value: "aditmex.com.mx" },
      { label: "Remitente", value: "no-reply@aditmex.com.mx" },
      { label: "Destinatario de formularios", value: "ventas@aditmex.com.mx" },
      { label: "API Key", value: "Guardada como variable de entorno RESEND_API_KEY en Vercel" },
      { label: "DNS en Hostinger", value: "Registros TXT + DKIM activos para autenticación de correo" },
    ],
    warnings: [
      "No elimines el dominio verificado en Resend ni los registros DNS de Resend en Hostinger — el formulario de contacto dejaría de enviar correos.",
      "No elimines ni regeneres la API Key sin actualizar simultáneamente la variable de entorno en Vercel.",
    ],
  },
  {
    icon: GitBranch,
    title: "Código fuente",
    badge: "GitHub",
    url: "https://github.com/aditmex-admin/ADITMEX",
    rows: [
      { label: "Repositorio", value: "github.com/aditmex-admin/ADITMEX (privado)" },
      { label: "Rama principal", value: "main — contiene el código estable de producción" },
      { label: "Rama de cambios", value: "stg — aquí se hacen y prueban los cambios antes de aprobarlos" },
      { label: "Flujo de deploy", value: "Cambios en stg → revisión → merge a main → Vercel despliega automáticamente" },
      { label: "Acceso", value: "Invitación de colaborador — solicitar al desarrollador" },
    ],
    warnings: [
      "No elimines la rama main ni la rama stg. La rama main es la que está conectada a Vercel — si se borra, el sitio deja de actualizarse.",
    ],
  },
  {
    icon: Server,
    title: "Hosting del sitio web",
    badge: "Vercel",
    url: "https://vercel.com/aditmexadmin-6301s-projects/aditmex/6W2uWbTSEjmaR3b1iSveGwwjs9Ye",
    rows: [
      { label: "Plan", value: "Hobby (gratuito)" },
      { label: "Dominio conectado", value: "aditmex.com.mx → apuntado desde Hostinger" },
      { label: "Deploy automático", value: "Sí — cada push a la rama main genera un deploy nuevo en producción" },
      { label: "Variable de entorno", value: "RESEND_API_KEY → Settings → Environment Variables" },
      { label: "Analytics", value: "Vercel Analytics + Speed Insights activos en el dashboard" },
    ],
    warnings: [
      "No elimines la variable de entorno RESEND_API_KEY — el formulario de contacto deja de funcionar sin ella.",
      "No desconectes el repositorio de GitHub ni cambies la rama de producción sin coordinar con el desarrollador.",
    ],
  },
  {
    icon: Code2,
    title: "Stack tecnológico",
    badge: "Resumen técnico",
    rows: [
      { label: "Framework", value: "Next.js 16 — App Router, React Server Components" },
      { label: "Estilos", value: "Tailwind CSS v4 con tokens de diseño personalizados" },
      { label: "Animaciones", value: "GSAP 3 con ScrollTrigger" },
      { label: "Componentes UI", value: "shadcn/ui + Lucide Icons" },
      { label: "Fuentes", value: "Montserrat (títulos) + Geist (cuerpo) — Google Fonts" },
      { label: "Lenguaje", value: "TypeScript estricto" },
      { label: "Gestor de paquetes", value: "Bun" },
      { label: "SEO", value: "Open Graph, JSON-LD (Organization + LocalBusiness), sitemap.xml, robots.txt" },
      { label: "Imágenes", value: "next/image — optimización automática, formato AVIF/WebP" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protecciones del formulario",
    badge: "Seguridad",
    rows: [
      { label: "Honeypot", value: "Campo invisible que los bots rellenan → solicitud descartada sin enviar" },
      { label: "Rate limiting", value: "Máx. 5 envíos por IP cada 5 minutos — protección contra spam masivo" },
      { label: "HTML escaping", value: "Los campos del usuario son escapados antes de incluirse en el email" },
      { label: "Validación", value: "Formato de correo validado en servidor + type=email en el cliente" },
      { label: "API Key en git", value: "El archivo .env no está en el repositorio — solo vive en Vercel" },
    ],
  },
];

function SectionCard({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;

  return (
    <div className="overflow-hidden rounded-xl border border-brand-navy/10 bg-white shadow-sm">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-brand-light"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5">
            <Icon className="h-4 w-4 text-brand-navy" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold text-brand-navy">{section.title}</span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-brand-gold">
              {section.badge}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-brand-navy/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Animación suave con CSS grid-rows */}
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="border-t border-brand-navy/8 px-6 py-5 flex flex-col gap-5">

            {/* Link a la plataforma */}
            {section.url && (
              <a
                href={section.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Abrir plataforma
              </a>
            )}

            {/* Avisos rojos */}
            {section.warnings && section.warnings.length > 0 && (
              <div className="flex flex-col gap-2">
                {section.warnings.map((w) => (
                  <div key={w} className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-xs font-medium leading-relaxed text-red-700">{w}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Filas de datos */}
            <dl className="flex flex-col gap-3">
              {section.rows.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[160px_1fr] gap-4 text-sm sm:grid-cols-[200px_1fr]">
                  <dt className="font-semibold text-brand-navy/50">{label}</dt>
                  <dd className="text-brand-navy/85">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocumentationPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("doc-auth") === "1") setUnlocked(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("doc-auth", "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (!unlocked) {
    return (
      <main
        className="flex min-h-svh flex-col items-center justify-center bg-brand-navy px-6"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(196,172,77,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <LogoMark className="h-[80vh] w-auto" />
        </div>
        <div className="relative z-10 w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
              <Lock className="h-5 w-5 text-brand-gold" />
            </div>
            <h1 className="text-xl font-extrabold text-white">Documentación técnica</h1>
            <p className="text-sm text-white/50">ADITMEX S. de R.L.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Contraseña"
              autoFocus
              className="w-full rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/15"
            />
            {error && <p className="text-xs text-red-400">Contraseña incorrecta.</p>}
            <button
              type="submit"
              className="rounded-lg bg-brand-gold py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Acceder
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-svh bg-brand-light px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-gold">
            ADITMEX S. de R.L.
          </span>
          <h1 className="text-3xl font-extrabold text-brand-navy">Documentación técnica</h1>
          <p className="text-sm leading-relaxed text-brand-navy/55">
            Resumen de todos los servicios, plataformas y tecnologías que sostienen el sitio web de ADITMEX.
            Haz clic en cada sección para expandir el detalle.
          </p>
        </div>

        {/* Aviso de cuenta Google */}
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-brand-gold/30 bg-brand-gold/8 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-bold text-brand-navy">Todas las plataformas usan la misma cuenta Google</p>
            <p className="text-sm leading-relaxed text-brand-navy/65">
              Para acceder a cualquier servicio (Hostinger, Google Workspace, Resend, GitHub, Vercel) inicia sesión
              con el botón <span className="font-semibold">"Continuar con Google"</span> usando la cuenta{" "}
              <span className="font-mono font-semibold text-brand-navy">aditmex.admin@gmail.com</span>.
            </p>
          </div>
        </div>

        <div className="mb-6 h-px w-full bg-brand-navy/10" />

        {/* Secciones */}
        <div className="flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <SectionCard key={s.title} section={s} />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-brand-navy/30">
          Esta página no está indexada ni enlazada públicamente · aditmex.com.mx
        </p>
      </div>
    </main>
  );
}
