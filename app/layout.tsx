import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const site = {
  name: "Bedazzled Window Cleaning",
  legalName: "Bedazzled Window Cleaning",
  url: "https://www.bedazzledwcs.co.uk",
  logo: "https://www.bedazzledwcs.co.uk/assets/images/logo/logo-white.png",
  telephone: "+44 7773 780671",
  email: "bedazzledwcs@gmail.com",
  address: {
    streetAddress: "168 Penrose Avenue",
    addressLocality: "Blackpool",
    addressRegion: "Lancashire",
    postalCode: "FY4 4JX",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.facebook.com/bedazzledwcs/?locale=en_GB",
    "https://www.tiktok.com/@bedazzledwcs",
    "https://www.instagram.com/bedazzledwcs/",
  ],
  searchUrl: "https://www.bedazzledwcs.co.uk/search?q={search_term_string}",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s | " + site.name,
  },
  description:
    "Commercial window cleaning across the North West. IPAF high cleans, managed properties, gutters and fascias. Free quotes.",
  openGraph: {
    siteName: site.name,
    url: site.url,
    type: "website",
    title: site.name,
    description:
      "Commercial window cleaning across the North West. IPAF high cleans, managed properties, gutters and fascias. Free quotes.",
    images: [
      {
        url: site.logo,
        width: 512,
        height: 512,
        alt: "Bedazzled Window Cleaning",
      },
    ],
  },
  alternates: { canonical: site.url },
  icons: { icon: "/favicon.ico" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}#org`,
  name: site.legalName,
  url: site.url,
  logo: site.logo,
  sameAs: site.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.telephone,
      email: site.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: ["en-GB"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    ...site.address,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}#org` },
  potentialAction: {
    "@type": "SearchAction",
    target: site.searchUrl,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        {children}

        {/* Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* WebSite + SearchAction */}
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
