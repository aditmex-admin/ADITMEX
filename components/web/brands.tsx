import Image from "next/image";

const BRANDS = [
  { src: "/assets/brands/ensign.png", alt: "Ensign" },
  { src: "/assets/brands/rzbc.png", alt: "RZBC" },
  { src: "/assets/brands/fufeng.png", alt: "Fufeng" },
  { src: "/assets/brands/wannianhuo.png", alt: "Wannianhuo" },
  { src: "/assets/brands/altrafine_gums.png", alt: "Altrafine Gums" },
  { src: "/assets/brands/basf.png", alt: "BASF" },
] as const;

const TRACK = [...BRANDS, ...BRANDS];

export default function Brands() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16">
      {/* Glow decorativo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,172,77,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Separador top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      {/* Separador bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Eyebrow */}
      <div className="relative mb-10 flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-brand-gold/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Marcas aliadas
          </span>
          <div className="h-px w-10 bg-brand-gold/60" />
        </div>
        <p className="text-sm text-white/35">
          Distribuimos las mejores marcas de la industria química mundial
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex w-max items-center gap-16"
          style={{
            animation: "marquee 32s linear infinite",
            willChange: "transform",
          }}
        >
          {TRACK.map((brand, i) => (
            <div
              key={i}
              className="flex h-20 w-48 shrink-0 items-center justify-center"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={192}
                height={80}
                className="max-h-16 w-auto max-w-[176px] object-contain brightness-0 invert opacity-40 transition-all duration-300 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
