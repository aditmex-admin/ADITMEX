const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aditmex.com.mx/#organization",
      name: "ADITMEX S. de R.L.",
      url: "https://aditmex.com.mx",
      email: "ventas@aditmex.com.mx",
      telephone: "+524435145662",
      description:
        "Distribuidora mexicana de materias primas para la industria de aromas, alimentos, cosmética e industrial con más de 10 años de experiencia. Proveemos insumos de calidad con servicio oportuno y asesoría especializada.",
      foundingDate: "2014",
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      address: [
        {
          "@type": "PostalAddress",
          name: "Oficina",
          streetAddress: "Santos Degollado 595",
          addressLocality: "Morelia",
          addressRegion: "Michoacán",
          postalCode: "58280",
          addressCountry: "MX",
        },
        {
          "@type": "PostalAddress",
          name: "Almacén",
          streetAddress: "Guillermo Massieu Helguera No. 34 Bodega A",
          addressLocality: "Ciudad de México",
          addressRegion: "CDMX",
          postalCode: "07340",
          addressCountry: "MX",
        },
      ],
      knowsAbout: [
        "Materias primas industriales",
        "Aromas y fragancias",
        "Insumos para alimentos y bebidas",
        "Ingredientes cosméticos",
        "Productos químicos industriales",
        "Acidulantes alimentarios",
        "Edulcorantes industriales",
        "Conservadores para alimentos",
        "Espesantes y estabilizantes",
        "Aceites vegetales y esenciales",
        "Emulsionantes cosméticos",
        "Derivados del maíz",
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=100094681106351"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aditmex.com.mx/#localbusiness",
      name: "ADITMEX S. de R.L.",
      url: "https://aditmex.com.mx",
      telephone: "+524435145662",
      email: "ventas@aditmex.com.mx",
      image: "https://aditmex.com.mx/assets/aditmex-logo-white.svg",
      description:
        "Distribuidora de materias primas para la industria de aromas, alimentos, cosmética e industrial en México. Más de 40 productos disponibles. Oficina en Morelia, Michoacán y almacén en Ciudad de México.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Santos Degollado 595",
        addressLocality: "Morelia",
        addressRegion: "Michoacán",
        postalCode: "58280",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.706,
        longitude: -101.195,
      },
      hasMap: "https://maps.google.com/maps?q=Santos+Degollado+595,+Nueva+Chapultepec,+58280+Morelia,+Michoacan,+Mexico",
      priceRange: "$$",
      currenciesAccepted: "MXN",
      paymentAccepted: "Transferencia bancaria, cheque",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=100094681106351"],
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Carbómero" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Glicerina USP" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "LESS 28% / 70%" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafina china" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aceite de coco RBD" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aceite de argán" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aceite de aguacate" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vitamina C (Ácido ascórbico)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ácido láctico" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ceteareth 20" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Trietanolamina" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ácido cítrico" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Dextrosa monohidratada" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Goma xantana" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sorbato de potasio" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Malto dextrina" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Benzoato de sodio" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Acesulfame K" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Goma guar" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vainilla" } },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aditmex.com.mx/#almacen",
      name: "ADITMEX — Almacén CDMX",
      parentOrganization: { "@id": "https://aditmex.com.mx/#organization" },
      url: "https://aditmex.com.mx",
      telephone: "+524435145662",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Guillermo Massieu Helguera No. 34 Bodega A",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "07340",
        addressCountry: "MX",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aditmex.com.mx/#website",
      url: "https://aditmex.com.mx",
      name: "ADITMEX",
      inLanguage: "es-MX",
      publisher: { "@id": "https://aditmex.com.mx/#organization" },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
