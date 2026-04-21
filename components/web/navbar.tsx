"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/web/logo-mark";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY < 100) setActiveSection("#inicio");
    };
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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
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
              width={200}
              height={56}
              className="h-11 w-auto"
              priority
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
          <LogoMark className="h-[70vh] w-auto" />
        </div>

        {/* Barra superior */}
        <div className="relative flex h-16 shrink-0 items-center justify-between px-6">
          <Image src="/assets/aditmex-logo-white.svg" alt="ADITMEX" width={200} height={56} className="h-11 w-auto" />
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
