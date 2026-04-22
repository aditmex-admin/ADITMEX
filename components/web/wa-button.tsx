"use client";

import { WaIcon } from "@/components/web/wa-icon";
import { WA_URL } from "@/lib/constants";

export default function WaButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-3.5 shadow-lg shadow-black/25 transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-xl hover:shadow-black/30"
    >
      <WaIcon className="h-7 w-7 shrink-0 text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[140px]">
        ¡Escríbenos!
      </span>
    </a>
  );
}
