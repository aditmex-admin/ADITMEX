"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { LogoMark } from "@/components/web/logo-mark";

const ROTATING_WORDS = [
  "materias primas",
  "soluciones químicas",
  "insumos de calidad",
  "servicio confiable",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: "power3.out",
        delay: 0.15,
      });
    }, sectionRef);

    const cycleWord = () => {
      const el = wordRef.current;
      if (!el) return;
      gsap.to(el, {
        y: "-115%",
        duration: 0.38,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % ROTATING_WORDS.length;
          el.textContent = ROTATING_WORDS[indexRef.current];
          gsap.fromTo(
            el,
            { y: "115%" },
            { y: "0%", duration: 0.45, ease: "power3.out" }
          );
        },
      });
    };

    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(cycleWord, 2800);
    }, 2600);

    return () => {
      ctx.revert();
      clearTimeout(startDelay);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-brand-navy px-6"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(196,172,77,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Logo mark — marca de agua, visible completa en xl+ */}
      <div className="pointer-events-none absolute right-[-12%] top-1/2 -translate-y-1/2 opacity-[0.04] xl:right-[2%] xl:opacity-[0.055]">
        <LogoMark className="h-[80vh] max-h-[700px] w-auto xl:h-[88vh] xl:max-h-[820px]" withDot />
      </div>

      {/* Corte angular decorativo — esquina superior izquierda */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-28 w-28 bg-brand-gold/10"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-7 text-center">

        <div className="hero-item">
          <Image
            src="/assets/aditmex-logo-white.svg"
            alt="ADITMEX Productos Químicos"
            width={408}
            height={115}
            priority
            className="w-[250px] sm:w-[300px] md:w-[360px] lg:w-[408px]"
          />
        </div>

        <div className="hero-item h-px w-14 bg-brand-gold/50" />

        <h1 className="hero-item text-[8.5vw] font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Tu proveedor de</span>
          <span className="inline-block h-[1.2em] overflow-hidden align-[-0.15em]">
            <span ref={wordRef} className="inline-block whitespace-nowrap text-brand-gold">
              {ROTATING_WORDS[0]}
            </span>
          </span>
        </h1>

        <p className="hero-item max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
          Más de 10 años abasteciendo la industria de alimentos, aromas,
          cosmética e industrial con calidad y servicio oportuno.
        </p>

        <div className="hero-item flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="group relative inline-block overflow-hidden rounded-md bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="absolute inset-0 w-0 bg-white/15 transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative">Solicitar cotización</span>
          </a>
          <a
            href="#quienes-somos"
            className="group relative inline-block overflow-hidden rounded-md border border-white/35 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative transition-colors duration-200 group-hover:text-white">Conoce más</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-item absolute bottom-8 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
