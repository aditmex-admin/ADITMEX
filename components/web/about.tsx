"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      className="relative overflow-hidden bg-brand-light px-6 py-24 lg:py-32"
    >
      {/* Logo mark — watermark izquierdo */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 -translate-y-1/2 opacity-[0.045]">
        <svg
          viewBox="0 0 4000 6900"
          className="h-[75vh] max-h-[640px] w-auto"
          fill="#C4AC4D"
          aria-hidden="true"
        >
          <path d="M1627 961c401,-44 816,49 1158,263 373,231 658,601 784,1022 127,416 98,878 -81,1274 -199,448 -587,808 -1049,972 -417,150 -889,140 -1299,-27 -405,-162 -746,-476 -943,-865 -196,-382 -248,-835 -147,-1252 93,-394 324,-753 641,-1003 268,-213 596,-348 936,-384l0 0zm-677 565c-203,441 -404,882 -606,1322 -9,19 -19,42 -1,59 284,398 567,796 850,1194 496,-45 992,-93 1488,-141 206,-452 416,-902 618,-1355 -42,-80 -103,-148 -153,-223 -236,-332 -472,-664 -709,-997 -496,46 -991,93 -1487,141z"/>
          <path d="M32 4762c191,0 381,-3 572,-2 -12,254 16,517 135,745 142,282 394,507 691,615 435,163 956,50 1289,-273 221,-212 354,-508 381,-811 11,-91 3,-182 7,-273 191,-8 382,-2 573,-3 12,305 -25,617 -146,899 -172,413 -507,753 -914,939 -315,147 -671,204 -1015,157 -652,-85 -1238,-555 -1460,-1174 -97,-261 -128,-542 -113,-819z"/>
        </svg>
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
                className="group relative inline-block overflow-hidden rounded-md bg-brand-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute inset-0 w-0 bg-brand-gold/25 transition-all duration-300 ease-out group-hover:w-full" />
                <span className="relative">Contáctanos</span>
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
    </section>
  );
}
