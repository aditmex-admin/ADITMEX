import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
