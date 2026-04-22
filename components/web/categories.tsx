"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Wheat, Droplets, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "Aromas",
    description:
      "Fragancias, esencias y fijadores para la industria de perfumería, higiene y cuidado personal.",
  },
  {
    icon: Wheat,
    title: "Alimentos",
    description:
      "Aditivos, conservadores y materias primas funcionales para la industria alimentaria.",
  },
  {
    icon: Droplets,
    title: "Cosmética",
    description:
      "Ingredientes activos, emolientes y bases para el desarrollo de formulaciones cosméticas.",
  },
  {
    icon: Wrench,
    title: "Industrial",
    description:
      "Solventes, surfactantes y químicos especializados para procesos industriales.",
  },
];

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cat-item", {
        y: 36,
        opacity: 0,
        duration: 0.7,
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
      id="categorias"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-navy px-6 py-24 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(196,172,77,0.10) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Corte angular — esquina superior derecha */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-brand-gold/10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Encabezado */}
        <div className="cat-item mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-brand-gold/60" />
            <span className="text-[0.9375rem] font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Nuestras categorías
            </span>
            <div className="h-px w-10 bg-brand-gold/60" />
          </div>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[2.6rem]">
            Soluciones para cada industria
          </h2>
        </div>

        {/* Tarjetas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="cat-item group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-brand-gold/35 hover:bg-white/[0.08]"
            >
              {/* Línea dorada superior — aparece en hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <Icon className="h-7 w-7 text-brand-gold" strokeWidth={1.5} />

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
