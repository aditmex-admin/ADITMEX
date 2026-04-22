const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aditmex.com.mx/#organization",
      name: "ADITMEX S. de R.L.",
      url: "https://aditmex.com.mx",
      email: "ventas@aditmex.com.mx",
      description:
        "Distribuidora mexicana de materias primas para la industria de aromas, alimentos, cosmética e industrial con más de 10 años de experiencia.",
      foundingDate: "2014",
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      knowsAbout: [
        "Materias primas industriales",
        "Aromas y fragancias",
        "Insumos para alimentos",
        "Ingredientes cosméticos",
        "Productos químicos industriales",
      ],
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
        "Distribuidora de materias primas para la industria de aromas, alimentos, cosmética e industrial en México.",
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
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aceite de coco RBD" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aceite de argán" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vitamina C" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ácido láctico" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "LESS 28% / 70%" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parafina china" } },
      ],
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
