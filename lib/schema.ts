// Breadcrumbs
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// Service
export function serviceJsonLd(opts: {
  siteUrl: string;
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string[]; // e.g. ["GB-ENG"]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.serviceName,
    description: opts.description,
    url: opts.url,
    areaServed: opts.areaServed || ["GB"],
    provider: { "@type": "Organization", "@id": `${opts.siteUrl}#org` },
  };
}

// LocalBusiness (use for your Blackpool base)
export function localBusinessJsonLd(opts: {
  siteUrl: string;
  name: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: "GB";
  };
  geo?: { lat: number; lng: number };
  openingHours?: string[]; // ["Mo-Fr 09:00-17:00"]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${opts.url}#local`,
    name: opts.name,
    url: opts.url,
    telephone: opts.telephone,
    ...(opts.email && { email: opts.email }),
    address: { "@type": "PostalAddress", ...opts.address },
    ...(opts.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: opts.geo.lat,
        longitude: opts.geo.lng,
      },
    }),
    ...(opts.openingHours && { openingHours: opts.openingHours }),
    parentOrganization: { "@id": `${opts.siteUrl}#org` },
  };
}

// FAQ
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Article or blog
export function articleJsonLd(opts: {
  siteUrl: string;
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string; // ISO
  dateModified: string;  // ISO
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    headline: opts.headline,
    description: opts.description,
    image: [opts.image],
    author: { "@type": "Person", name: opts.authorName },
    publisher: { "@type": "Organization", "@id": `${opts.siteUrl}#org` },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
  };
}
