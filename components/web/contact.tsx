"use client";

import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { WaIcon } from "@/components/web/wa-icon";
import {
  WA_URL,
  CONTACT_EMAIL,
  ADDRESS,
  MAP_EMBED_URL,
} from "@/lib/constants";

const CONTACT_INFO = [
  { icon: Mail, label: "Correo", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    icon: WaIcon,
    label: "WhatsApp",
    value: "+52 443 514 5662",
    href: WA_URL,
  },
  { icon: MapPin, label: "Ubicación", value: ADDRESS, href: null },
];

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full rounded-lg border border-brand-navy/20 bg-gray-50 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/30 outline-none transition-colors duration-200 focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/15";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-brand-navy px-6 py-24 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(196,172,77,0.08) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(196,172,77,0.12) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-brand-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Hablemos
            </span>
            <div className="h-px w-10 bg-brand-gold" />
          </div>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[2.6rem]">
            ¿Listo para cotizar?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/55">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas con
            disponibilidad y precios.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.65fr] lg:items-start lg:gap-10">
          {/* Col izquierda — info + mapa */}
          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/25 bg-brand-gold/10">
                  <Icon className="h-4 w-4 text-brand-gold" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-white/80">{value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-1 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Ubicación ADITMEX — Santos Degollado 595, Morelia, Michoacán"
                src={MAP_EMBED_URL}
                className="h-[220px] w-full lg:h-[260px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          </div>

          {/* Col derecha — form blanco */}
          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-black/20 md:p-8">
            {/* Región anunciada por screenreaders al cambiar estado */}
            <div aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <div role="status" className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
                    <Send className="h-6 w-6 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">¡Mensaje enviado!</h3>
                  <p className="max-w-xs text-sm text-brand-navy/55">
                    Gracias por contactarnos. Te respondemos en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-gold underline-offset-4 hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>

            {status !== "success" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-[3px] w-6 rounded-full bg-brand-gold" />
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Formulario de contacto
                  </span>
                </div>

                {/* Honeypot — invisible para humanos, los bots lo llenan */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}
                >
                  <label htmlFor="website">Sitio web</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-brand-navy/65">
                      Nombre <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Tu nombre"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="empresa" className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-brand-navy/65">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      maxLength={120}
                      placeholder="Nombre de tu empresa"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="correo" className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-brand-navy/65">
                    Correo <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="tu@correo.com"
                    className={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-brand-navy/65">
                    Mensaje <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    maxLength={2000}
                    placeholder="¿Qué materias primas necesitas? ¿Cantidades aproximadas?"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-xs text-red-500">
                    Ocurrió un error al enviar. Intenta de nuevo o escríbenos a{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-brand-gold bg-brand-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 disabled:opacity-60"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-x-0 group-disabled:hidden" />
                  {status === "loading" ? (
                    <svg className="relative h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <Send className="relative h-4 w-4" />
                  )}
                  <span className="relative">
                    {status === "loading" ? "Enviando…" : "Enviar mensaje"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
