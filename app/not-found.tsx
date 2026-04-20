import Image from "next/image";
import { Home } from "lucide-react";
import { LogoMark } from "@/components/web/logo-mark";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-brand-navy px-6 text-center"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(196,172,77,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(196,172,77,0.10) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Logo mark — centrado en el fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" aria-hidden="true">
        <LogoMark className="h-[85vh] w-auto" />
      </div>

      {/* Corte angular */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-28 w-28 bg-brand-gold/10"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <a href="/" aria-label="Volver al inicio">
          <Image
            src="/assets/aditmex-logo-white.svg"
            alt="ADITMEX"
            width={200}
            height={56}
            priority
            className="h-[120px] w-auto opacity-80 transition-opacity hover:opacity-100"
          />
        </a>

        <div className="flex flex-col items-center gap-3">
          <span className="text-[7rem] font-extrabold leading-none text-brand-gold md:text-[10rem]">
            404
          </span>
          <h1 className="text-2xl font-extrabold text-white md:text-3xl">
            Página no encontrada
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            La dirección que buscas no existe o fue movida. Regresa al inicio
            para continuar explorando.
          </p>
        </div>

        <a
          href="/"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-brand-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-x-0" />
          <Home className="relative h-4 w-4" />
          <span className="relative">Ir al inicio</span>
        </a>
      </div>
    </main>
  );
}
