import type { Metadata } from "next";
import Navbar from "@/components/web/navbar";
import Footer from "@/components/web/footer";

export const metadata: Metadata = {
  title: "ADITMEX — Distribuidora de materias primas",
  description:
    "ADITMEX S. de R.L. — Proveedor de aromas, alimentos, cosmética e industrial en México.",
  openGraph: {
    title: "ADITMEX",
    description: "Proveedor de aromas, alimentos, cosmética e industrial en México.",
    url: "https://aditmex.com.mx",
    siteName: "ADITMEX",
    locale: "es_MX",
    type: "website",
  },
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
