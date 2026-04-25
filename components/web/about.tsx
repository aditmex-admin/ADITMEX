"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LogoMark } from "@/components/web/logo-mark";

gsap.registerPlugin(ScrollTrigger);

const BRANDS = [
  { src: "/assets/brands/ensign.png", alt: "Ensign" },
  { src: "/assets/brands/rzbc.png", alt: "RZBC" },
  { src: "/assets/brands/fufeng.png", alt: "Fufeng" },
  { src: "/assets/brands/wannianhuo.png", alt: "Wannianhuo" },
  { src: "/assets/brands/altrafine_gums.png", alt: "Altrafine Gums" },
  { src: "/assets/brands/basf.png", alt: "BASF" },
] as const;

const TRACK = [...BRANDS, ...BRANDS];

const STATS = [
  { value: "10+", label: "Años de experiencia en la industria" },
  { value: "4", label: "Sectores industriales atendidos" },
  { value: "100%", label: "Compromiso con calidad y servicio" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".qs-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-light px-6 py-16 lg:py-24"
    >
      {/* Logo mark — watermark izquierdo */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 -translate-y-1/2 opacity-[0.045]">
        <LogoMark className="h-[75vh] max-h-[640px] w-auto" />
      </div>

      {/* Corte angular decorativo — esquina inferior derecha */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 bg-brand-gold/10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">

          {/* Col izquierda — texto */}
          <div className="flex flex-col gap-6">
            <div className="qs-item flex items-center gap-3">
              <div className="h-px w-10 bg-brand-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Quiénes somos
              </span>
            </div>

            <h2 className="qs-item text-balance text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl lg:text-[2.6rem]">
              Más de una década abasteciendo la industria mexicana
            </h2>

            <p className="qs-item text-base leading-relaxed text-brand-text/65 sm:text-lg">
              Somos una comercializadora con más de 10 años de experiencia en la
              distribución de materias primas para la industria de aromas,
              alimentos, cosmética e industrial en México.
            </p>

            <p className="qs-item text-base leading-relaxed text-brand-text/65">
              Nuestro compromiso es proveer insumos de calidad con servicio
              oportuno y asesoría especializada, acompañando a nuestros clientes
              en cada etapa de su proceso productivo.
            </p>

            <div className="qs-item">
              <a
                href="#contacto"
                className="cta-bounce inline-block rounded-md border border-brand-gold bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-brand-gold"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Col derecha — estadísticas */}
          <div className="flex flex-col gap-4">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="qs-item flex overflow-hidden rounded-lg border border-brand-gold/20 bg-white shadow-sm"
              >
                <div className="w-[3px] shrink-0 bg-brand-gold" />
                <div className="flex flex-1 items-center gap-5 px-6 py-5">
                  <span className="w-20 shrink-0 text-4xl font-extrabold leading-none text-brand-gold tabular-nums">
                    {value}
                  </span>
                  <div className="h-8 w-px shrink-0 bg-brand-gold/20" />
                  <span className="text-sm font-medium leading-snug text-brand-navy/75">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Marcas aliadas */}
      <div className="relative z-10 mt-16">
        {/* Eyebrow centrado */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-brand-gold" />
          <span className="text-base font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Marcas aliadas
          </span>
          <div className="h-px w-10 bg-brand-gold" />
        </div>

        {/* Track full-bleed rompiendo el px-6 de la sección */}
        <div
          className="-mx-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-8 md:gap-16 will-change-transform">
            {TRACK.map((brand, i) => (
              <div key={i} className="flex h-14 w-28 shrink-0 items-center justify-center md:h-20 md:w-44">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={176}
                  height={80}
                  className="max-h-10 w-auto max-w-[104px] object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:max-h-16 md:max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
