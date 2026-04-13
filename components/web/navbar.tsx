"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-brand-navy/95 shadow-[0_4px_24px_rgba(196,172,77,0.07)] backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" aria-label="ADITMEX inicio">
            <Image
              src="/assets/aditmex-logo-white.svg"
              alt="ADITMEX"
              width={160}
              height={45}
              className="h-9 w-auto"
            />
          </a>

          {/* Links desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-brand-gold after:transition-transform after:duration-300 after:ease-out ${
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-white/65 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Hamburguesa */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md p-2 text-white/70 transition-colors hover:text-white md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-brand-navy transition-opacity duration-400 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Logo mark — watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <svg viewBox="0 0 4000 6900" className="h-[70vh] w-auto" fill="#C4AC4D" aria-hidden="true">
            <path d="M1627 961c401,-44 816,49 1158,263 373,231 658,601 784,1022 127,416 98,878 -81,1274 -199,448 -587,808 -1049,972 -417,150 -889,140 -1299,-27 -405,-162 -746,-476 -943,-865 -196,-382 -248,-835 -147,-1252 93,-394 324,-753 641,-1003 268,-213 596,-348 936,-384l0 0zm-677 565c-203,441 -404,882 -606,1322 -9,19 -19,42 -1,59 284,398 567,796 850,1194 496,-45 992,-93 1488,-141 206,-452 416,-902 618,-1355 -42,-80 -103,-148 -153,-223 -236,-332 -472,-664 -709,-997 -496,46 -991,93 -1487,141z"/>
            <path d="M32 4762c191,0 381,-3 572,-2 -12,254 16,517 135,745 142,282 394,507 691,615 435,163 956,50 1289,-273 221,-212 354,-508 381,-811 11,-91 3,-182 7,-273 191,-8 382,-2 573,-3 12,305 -25,617 -146,899 -172,413 -507,753 -914,939 -315,147 -671,204 -1015,157 -652,-85 -1238,-555 -1460,-1174 -97,-261 -128,-542 -113,-819z"/>
          </svg>
        </div>

        {/* Barra superior */}
        <div className="relative flex h-16 shrink-0 items-center justify-between px-6">
          <Image src="/assets/aditmex-logo-white.svg" alt="ADITMEX" width={160} height={45} className="h-9 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-6 h-px bg-brand-gold/30" />

        {/* Links */}
        <nav className="relative flex flex-1 flex-col items-center justify-center gap-2">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-8 py-4 text-3xl font-extrabold text-white"
              style={{
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transition: open
                  ? `opacity 350ms ease ${i * 60 + 80}ms, transform 350ms ease ${i * 60 + 80}ms`
                  : "opacity 200ms ease, transform 200ms ease",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="relative shrink-0 px-6 pb-12">
          <div className="mx-auto mb-8 h-px max-w-xs bg-brand-gold/20" />
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block w-full rounded-md bg-brand-gold py-4 text-center text-sm font-semibold uppercase tracking-widest text-white"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </>
  );
}
