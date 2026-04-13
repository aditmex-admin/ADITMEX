import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ADITMEX",
  description: "ADITMEX S. de R.L. — Distribuidora de aromas, alimentos, cosmética e industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
