# ADITMEX — Landing Page

Sitio web público para **ADITMEX S. de R.L.**, distribuidora de materias primas para la industria de aromas, alimentos, cosmética e industrial en México.

- **Dominio:** aditmex.com.mx
- **Deploy:** Vercel (rama `stg` → producción)
- **Cliente:** Jeennifer Ojeda

---

## Stack

| Herramienta | Versión | Uso |
|---|---|---|
| Next.js | 16 (App Router) | Framework principal |
| Tailwind CSS | v4 | Estilos |
| GSAP | 3 | Animaciones y scroll |
| shadcn/ui | v4 | Componentes base |
| Resend | — | Envío de correo desde formulario |
| Vercel Analytics + Speed Insights | — | Métricas de producción |
| Bun | — | Gestor de paquetes y runner |

---

## Comandos

```bash
bun run dev       # Servidor de desarrollo
bun run build     # Build de producción
bun run lint      # ESLint
```

---

## Variables de entorno

Crear `.env.local` en la raíz con:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

La clave se obtiene en [resend.com](https://resend.com). El dominio `aditmex.com.mx` debe estar verificado en el dashboard de Resend para enviar desde `no-reply@aditmex.com.mx`.

---

## Arquitectura

```
app/
├── layout.tsx              # Root: fuentes, SpeedInsights, Analytics
├── globals.css             # Tokens de diseño y utilidades globales
├── not-found.tsx           # Página 404 personalizada
├── robots.ts               # /robots.txt
├── sitemap.ts              # /sitemap.xml
├── icon.svg                # Favicon (logo mark ADITMEX)
├── api/
│   └── contact/route.ts    # POST — envío de formulario de contacto
└── (web)/
    ├── layout.tsx           # Metadata SEO, Navbar, Footer, WaButton
    └── page.tsx             # Landing: Hero → Quiénes somos → Categorías → Productos → Contacto

components/
├── ui/                     # shadcn/ui (compartidos)
└── web/
    ├── hero.tsx            # Sección principal con palabra rotante
    ├── about.tsx           # Quiénes somos + estadísticas
    ├── categories.tsx      # Tarjetas de sectores
    ├── products.tsx        # Bento grid de productos por sector
    ├── contact.tsx         # Formulario + mapa + datos de contacto
    ├── navbar.tsx          # Navegación fija con scroll tracking
    ├── footer.tsx          # Footer con enlaces y datos
    ├── wa-button.tsx       # Botón flotante de WhatsApp
    ├── structured-data.tsx # JSON-LD (Organization, LocalBusiness, WebSite)
    ├── logo-mark.tsx       # SVG del logo mark (componente compartido)
    └── wa-icon.tsx         # SVG de WhatsApp (componente compartido)

lib/
└── constants.ts            # Valores compartidos: URLs, correo, direcciones
```

---

## Ubicaciones

| Tipo | Dirección |
|---|---|
| Oficina | Santos Degollado 595, Col. Nueva Chapultepec, 58280 Morelia, Mich. |
| Almacén | Guillermo Massieu Helguera No. 34 Bodega A, Col. San José Ticomán, 07340 CDMX |

---

## Protecciones del formulario de contacto

- **Honeypot:** campo oculto `website`; si viene relleno se simula éxito sin enviar
- **Rate limiting:** máx. 5 solicitudes por IP cada 5 minutos (in-memory)
- **HTML escaping:** todos los campos de usuario son escapados antes de incluirse en el email
