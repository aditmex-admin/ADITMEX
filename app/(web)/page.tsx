import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center bg-brand-gray overflow-hidden">
      {/* Fondo decorativo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #e8e6f0 0%, transparent 70%)",
        }}
      />

      {/* Contenido */}
      <div className="animate-fade-in relative flex flex-col items-center gap-10 px-6 text-center">
        <Image
          src="/assets/Aditmex - logo.svg"
          alt="ADITMEX Productos Químicos"
          width={480}
          height={136}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />

        <div className="flex flex-col items-center gap-3">
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold"
          >
            Próximamente
          </span>
          <p className="max-w-sm text-sm text-brand-text/60">
            Estamos construyendo algo grande.
            <br />
            Mientras tanto puedes contactarnos en{" "}
            <a
              href="mailto:contacto@aditmex.com.mx"
              className="text-brand-navy underline-offset-2 hover:underline"
            >
              contacto@aditmex.com.mx
            </a>
          </p>
        </div>

        {/* Línea decorativa */}
        <div className="h-px w-16 bg-brand-gold/50" />
      </div>
    </main>
  );
}
