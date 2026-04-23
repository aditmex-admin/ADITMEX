"use client";

import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    key: "industrial",
    src: "/assets/images/agroindustria.avif",
    alt: "Maquinaria agrícola en campo — materias primas para sector industrial, ADITMEX Morelia",
    label: "Industrial",
    products: ["Carbómero", "LESS 28% / 70%", "Glicerina USP", "Parafina china"],
    className: "col-span-2",
  },
  {
    key: "aceite",
    src: "/assets/images/aceite.avif",
    alt: "Frasco de aceite esencial — aceite de coco RBD, argán y aguacate distribuidos por ADITMEX",
    label: "Aceites naturales",
    products: ["Aceite de coco RBD", "Aceite de argán", "Aceite de aguacate"],
    className: "col-span-1",
  },
  {
    key: "cosmetica",
    src: "/assets/images/suplementos.avif",
    alt: "Polvo cosmético rosa — ingredientes para cosmética como Vitamina C, ácido láctico y emulsionantes, ADITMEX",
    label: "Cosmética",
    products: ["Vitamina C", "Ácido láctico", "Ceteareth 20", "Trietanolamina"],
    className: "col-span-1",
  },
  {
    key: "alimentos",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    alt: "Ingredientes para la industria de alimentos — acidulantes, espesantes y conservadores, ADITMEX",
    label: "Alimentos",
    products: ["Ácido cítrico", "Dextrosa monohidratada", "Goma xantana", "Sorbato de potasio"],
    className: "col-span-2",
  },
] as const;

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    gsap.from(grid, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: grid,
        start: "top bottom",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-light px-6 py-24 lg:py-32"
    >
      {/* Glows decorativos */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] lg:h-[560px] lg:w-[560px]"
        style={{ background: "radial-gradient(circle at top right, rgba(196,172,77,0.28) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] lg:h-[480px] lg:w-[480px]"
        style={{ background: "radial-gradient(circle at bottom left, rgba(39,39,77,0.20) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-brand-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Lo que distribuimos
              </span>
            </div>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl lg:text-[2.6rem] xl:text-5xl">
              Materias primas para cada proceso
            </h2>
          </div>
          <a
            href="/assets/pdf/Catalogo-ADITMEX.pdf"
            download
            className="cta-bounce group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-md border border-brand-gold bg-brand-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <Download className="relative h-4 w-4" />
            <span className="relative">Descargar catálogo</span>
          </a>
        </div>

        {/* Bento grid — 2 cols mobile / 3 cols desktop */}
        <div
          ref={gridRef}
          className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[300px] md:grid-cols-3 lg:auto-rows-[340px] xl:auto-rows-[360px]"
        >
          {CARDS.map((card) => (
            <div
              key={card.key}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${card.className}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  priority={card.key === "industrial"}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/55 to-black/15" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 md:p-5">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-brand-gold md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem]">
                  {card.label}
                </span>
                <ul className="flex flex-col gap-0.5">
                  {card.products.map((p) => (
                    <li key={p} className="text-xs font-semibold text-white md:text-[0.8rem] lg:text-sm xl:text-[0.9rem]">
                      · {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
