import type { Metadata } from "next";
import Navbar from "@/components/web/navbar";
import Footer from "@/components/web/footer";
import StructuredData from "@/components/web/structured-data";
import WaButton from "@/components/web/wa-button";

const TITLE = "ADITMEX | Distribuidora de Materias Primas en México";
const DESCRIPTION =
  "Distribuidora de materias primas para la industria de aromas, alimentos, cosmética e industrial en México. Más de 10 años de experiencia. +40 productos disponibles en Morelia, Michoacán.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "materias primas Mexico",
    "distribuidora materias primas",
    "aromas industriales",
    "insumos cosmetica",
    "insumos alimentos",
    "quimica industrial",
    "Morelia Michoacan",
    "ADITMEX",
    "carbomero",
    "aceite de coco RBD",
    "glicerina USP",
  ],
  authors: [{ name: "ADITMEX S. de R.L." }],
  creator: "ADITMEX S. de R.L.",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://aditmex.com.mx",
    siteName: "ADITMEX",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: "https://aditmex.com.mx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StructuredData />
      <Navbar />
      {children}
      <Footer />
      <WaButton />
    </>
  );
}
