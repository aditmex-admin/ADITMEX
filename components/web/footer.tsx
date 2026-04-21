import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { WaIcon } from "@/components/web/wa-icon";
import { WA_URL, FACEBOOK_URL, CONTACT_EMAIL, ADDRESS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy">
      {/* Barra dorada superior */}
      <div className="h-1 bg-brand-gold" />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Col 1 — Logo + descripción */}
          <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-1">
            <Image
              src="/assets/aditmex-logo-white.svg"
              alt="ADITMEX"
              width={200}
              height={56}
              className="h-18 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Distribuidora de materias primas para la industria de aromas,
              alimentos, cosmética e industrial en México.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook ADITMEX"
                className="text-white/60 transition-colors duration-200 hover:text-brand-gold"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={WA_URL}
                aria-label="WhatsApp ADITMEX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors duration-200 hover:text-brand-gold"
              >
                <WaIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Navegación */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Navegación
            </span>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="relative w-fit text-sm text-white/70 transition-colors duration-200 hover:text-white after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Col 3 — Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Contacto
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +52 443 514 5662
            </a>
            <div className="flex items-start gap-2.5 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {ADDRESS}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ADITMEX S. de R.L. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">aditmex.com.mx</p>
        </div>
      </div>
    </footer>
  );
}
