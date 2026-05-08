import { NextResponse } from "next/server";

const MD = `# ADITMEX — Materias Primas Industriales

Comercializadora con más de 10 años de experiencia distribuyendo materias primas
para la industria de aromas, alimentos, cosmética e industrial en México.

**Ubicación:** Morelia, Michoacán, México
**Contacto:** ventas@aditmex.com.mx | WhatsApp: +52 443 514 5662

## Productos

### Alimentos
- Ácido cítrico, Dextrosa monohidratada, Goma xantana, Sorbato de potasio

### Aceites naturales
- Aceite de coco RBD, Aceite de argán, Aceite de aguacate

### Cosmética
- Vitamina C, Ácido láctico, Ceteareth 20, Trietanolamina

### Industrial
- Carbómero, LESS 28% / 70%, Glicerina USP, Parafina china

## Marcas aliadas

Ensign, RZBC, Fufeng, Wannianhuo, Altrafine Gums, BASF

## API de contacto

\`\`\`
POST https://aditmex.com.mx/api/contact
Content-Type: application/json

{
  "nombre": "string (requerido)",
  "correo": "email (requerido)",
  "mensaje": "string (requerido)",
  "empresa": "string (opcional)"
}
\`\`\`

Rate limit: 5 solicitudes por IP cada 5 minutos.
`;

export async function GET() {
  return new NextResponse(MD, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
