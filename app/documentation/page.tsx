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
} from "lucide-react";

const PASSWORD = "aditmex";

type Section = {
  icon: React.ElementType;
  title: string;
  badge: string;
  rows: { label: string; value: string }[];
};

const SECTIONS: Section[] = [
  {
    icon: Globe,
    title: "Dominio",
    badge: "aditmex.com.mx",
    rows: [
      { label: "Proveedor", value: "Hostinger" },
      { label: "Panel de control", value: "hpanel.hostinger.com" },
      { label: "Dominio registrado", value: "aditmex.com.mx" },
      { label: "Renovación", value: "Anual — revisar fecha en Hostinger" },
      { label: "DNS administrados en", value: "Hostinger (zona DNS del dominio)" },
      { label: "Registros activos", value: "MX (Google Workspace) + verificación Resend + A/CNAME (Vercel)" },
    ],
  },
  {
    icon: Mail,
    title: "Correo corporativo",
    badge: "Google Workspace",
    rows: [
      { label: "Proveedor", value: "Google Workspace (Business Starter)" },
      { label: "Panel de admin", value: "admin.google.com" },
      { label: "Cuenta de administración", value: "aditmex.admin@gmail.com" },
      { label: "Correo activo", value: "ventas@aditmex.com.mx" },
      { label: "MX configurados en", value: "Hostinger — apuntan a servidores de Google" },
      { label: "Nota", value: "No tocar los registros MX en Hostinger o el correo deja de funcionar" },
    ],
  },
  {
    icon: Send,
    title: "Envío de formulario de contacto",
    badge: "Resend",
    rows: [
      { label: "Plataforma", value: "Resend (resend.com)" },
      { label: "Cuenta registrada con", value: "aditmex.admin@gmail.com" },
      { label: "Dominio verificado", value: "aditmex.com.mx" },
      { label: "Remitente configurado", value: "no-reply@aditmex.com.mx" },
      { label: "Destinatario de formularios", value: "ventas@aditmex.com.mx" },
      { label: "API Key", value: "Guardada en variable de entorno RESEND_API_KEY en Vercel" },
      { label: "Registros DNS Resend", value: "Agregados en Hostinger (TXT + DKIM) para autenticación" },
    ],
  },
  {
    icon: GitBranch,
    title: "Código fuente",
    badge: "GitHub",
    rows: [
      { label: "Plataforma", value: "GitHub" },
      { label: "Repositorio", value: "Privado — acceso por invitación" },
      { label: "Rama de producción", value: "stg" },
      { label: "Flujo", value: "Push a stg → Vercel detecta el cambio → deploy automático" },
      { label: "Nota", value: "No se hace deploy manual. Cada cambio aprobado va directo al repo" },
    ],
  },
  {
    icon: Server,
    title: "Hosting del sitio web",
    badge: "Vercel",
    rows: [
      { label: "Plataforma", value: "Vercel" },
      { label: "Plan", value: "Hobby (gratuito para proyectos como este)" },
      { label: "Panel", value: "vercel.com/dashboard" },
      { label: "Cuenta registrada con", value: "aditmex.admin@gmail.com" },
      { label: "Dominio conectado", value: "aditmex.com.mx (DNS apuntando a Vercel desde Hostinger)" },
      { label: "Deploy automático", value: "Sí — cualquier push a la rama stg dispara un nuevo deploy" },
      { label: "Variables de entorno", value: "RESEND_API_KEY configurada en Settings → Environment Variables" },
      { label: "Analytics", value: "Vercel Analytics + Speed Insights activos en el dashboard" },
    ],
  },
  {
    icon: Code2,
    title: "Stack tecnológico del sitio",
    badge: "Resumen técnico",
    rows: [
      { label: "Framework", value: "Next.js 16 — App Router, React Server Components" },
      { label: "Estilos", value: "Tailwind CSS v4 con tokens de diseño personalizados" },
      { label: "Animaciones", value: "GSAP 3 con ScrollTrigger" },
      { label: "Componentes UI", value: "shadcn/ui sobre Radix + Lucide Icons" },
      { label: "Fuentes", value: "Montserrat (títulos) + Geist (cuerpo) — Google Fonts" },
      { label: "Lenguaje", value: "TypeScript estricto" },
      { label: "Gestor de paquetes", value: "Bun" },
      { label: "SEO", value: "Metadatos Open Graph, JSON-LD (Organization + LocalBusiness), sitemap.xml, robots.txt" },
      { label: "Formulario de contacto", value: "Rate limiting por IP + honeypot anti-spam + HTML escaping" },
      { label: "Imágenes", value: "next/image con optimización automática, formato AVIF/WebP" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protecciones y seguridad",
    badge: "Formulario",
    rows: [
      { label: "Honeypot", value: "Campo oculto que los bots rellenan → solicitud descartada silenciosamente" },
      { label: "Rate limiting", value: "Máx. 5 envíos por IP cada 5 minutos (protección contra spam masivo)" },
      { label: "HTML escaping", value: "Todos los campos del usuario son escapados antes de incluirse en el email" },
      { label: "Validación de correo", value: "Regex en el servidor + type=email en el cliente" },
      { label: "Variables de entorno", value: ".env.local no está en git — la API key solo vive en Vercel" },
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

      {open && (
        <div className="border-t border-brand-navy/8 px-6 py-4">
          <dl className="flex flex-col gap-3">
            {section.rows.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[160px_1fr] gap-4 text-sm sm:grid-cols-[200px_1fr]">
                <dt className="font-semibold text-brand-navy/55">{label}</dt>
                <dd className="text-brand-navy/85">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
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
      <main className="flex min-h-svh flex-col items-center justify-center bg-brand-navy px-6"
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
            {error && (
              <p className="text-xs text-red-400">Contraseña incorrecta.</p>
            )}
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
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-gold">
            ADITMEX S. de R.L.
          </span>
          <h1 className="text-3xl font-extrabold text-brand-navy">
            Documentación técnica
          </h1>
          <p className="text-sm leading-relaxed text-brand-navy/55">
            Resumen de todos los servicios, plataformas y tecnologías que sostienen el sitio web de ADITMEX.
            Haz clic en cada sección para expandir el detalle.
          </p>
          <div className="mt-2 h-px w-full bg-brand-navy/10" />
        </div>

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
