import Preloader from "@/src/layouts/Preloader";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "/styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Updated Schema Markup (Structured Data) - Properly Converted to JSON String
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bedazzledwcs.co.uk/#website",
        name: "Bedazzled Window Cleaning Services",
        url: "https://bedazzledwcs.co.uk",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://bedazzledwcs.co.uk/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://bedazzledwcs.co.uk/#organization",
        name: "Bedazzled Window Cleaning Services",
        url: "https://bedazzledwcs.co.uk",
        logo: "https://www.bedazzledwcs.co.uk/assets/images/logo/logo-white-two.png",
        sameAs: [
          "https://www.facebook.com/bedazzledwcs",
          "https://www.instagram.com/bedazzledwcs/",
          "https://www.tiktok.com/@bedazzledwcs",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+447773780671",
          contactType: "Customer Service",
          areaServed: [
            "Lancashire",
            "Blackpool",
            "Preston",
            "Lancaster",
            "Burnley",
            "Lytham St Annes",
            "Poulton-le-Fylde",
            "Morecambe",
            "Chorley",
            "Blackburn",
            "Southport",
            "Fylde Coast",
            "West Lancashire",
            "Wyre",
            "Ribble Valley",
          ],
          availableLanguage: "English",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bedazzledwcs.co.uk/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bedazzledwcs.co.uk/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://bedazzledwcs.co.uk/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: "https://bedazzledwcs.co.uk/contact",
          },
        ],
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://bedazzledwcs.co.uk/#localbusiness",
        name: "Bedazzled Window Cleaning Services",
        url: "https://bedazzledwcs.co.uk",
        image:
          "https://www.bedazzledwcs.co.uk/assets/images/logo/logo-white-two.png",
        telephone: "+447773780671",
        address: {
          "@type": "PostalAddress",
          streetAddress: "168 Penrose Avenue",
          addressLocality: "Blackpool",
          addressRegion: "Lancashire",
          postalCode: "FY4 4JX",
          addressCountry: "GB",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "05:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          "Lancashire",
          "Blackpool",
          "Preston",
          "Lancaster",
          "Burnley",
          "Lytham St Annes",
          "Poulton-le-Fylde",
          "Morecambe",
          "Chorley",
          "Blackburn",
          "Southport",
          "Fylde Coast",
          "West Lancashire",
          "Wyre",
          "Ribble Valley",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Commercial Window Cleaning",
            availability: "https://schema.org/InStock",
            url: "https://bedazzledwcs.co.uk/services/commercial-window-cleaning",
          },
        ],
        sameAs: [
          "https://www.facebook.com/bedazzledwcs",
          "https://www.tiktok.com/@bedazzledwcs",
          "https://www.instagram.com/bedazzledwcs/",
        ],
      },
    ],
  };

  return (
    <Fragment>
      <Head>
        {/*====== Required meta tags ======*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="North West commercial window cleaning by beDAZzled"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/*====== Title ======*/}
        <title>BeDAZzled Commercial Window Cleaning - North West - UK</title>
        {/*====== JSON-LD Schema Markup (Fixed) ======*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
      {loading && <Preloader />}
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
};

export default App;
