import Preloader from "@/src/layouts/Preloader";
import Head from "next/head";
import Script from "next/script";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import "../styles/globals.css";
import "animate.css/animate.min.css";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Handle client-side route changes for GA
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Skip tracking on /reviews if needed
      if (url === "/reviews") return;
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        {/*====== Required meta tags ======*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="Commercial window cleaning in Blackpool, Preston, Lytham St Annes, Poulton le Fylde, and Kirkham. Reliable teams, safe systems, and spotless results."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/*====== Page Title ======*/}
        <title>
          BeDazzled Commercial Window Cleaners | Blackpool and Lancashire
        </title>

        {/*====== Open Graph Tags (Facebook, Instagram, LinkedIn) ======*/}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BeDazzled Commercial Window Cleaners | Blackpool and Lancashire"
        />
        <meta
          property="og:description"
          content="Commercial window cleaning in Blackpool, Preston, Lytham St Annes, Poulton le Fylde, and Kirkham. Reliable teams, safe systems, and spotless results."
        />
        <meta property="og:image" content="/assets/images/gallery/cta-1.jpg" />
        <meta property="og:url" content="https://www.bedazzledwcs.co.uk" />

        {/*====== Twitter Card ======*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BeDazzled Commercial Window Cleaners | Blackpool and Lancashire"
        />
        <meta
          name="twitter:description"
          content="Commercial window cleaning in Blackpool, Preston, Lytham St Annes, Poulton le Fylde, and Kirkham. Reliable teams, safe systems, and spotless results."
        />
        <meta name="twitter:image" content="/assets/images/gallery/cta-1.jpg" />

        {/*====== Favicon ======*/}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/png"
        />

        {/*====== Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/*====== Vendor CSS ======*/}
        <link
          rel="stylesheet"
          href="assets/fonts/flaticon/flaticon_gadden.css"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        <link rel="stylesheet" href="assets/vendor/slick/slick.css" />
        <link
          rel="stylesheet"
          href="assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/nice-select/css/nice-select.css"
        />

        <link rel="stylesheet" href="assets/vendor/animate.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>

      {/* Google Analytics Script */}

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tn3zd74i0j");
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Default config: disable auto pageview, we track manually
          gtag('config', '${gtag.GA_TRACKING_ID}', { send_page_view: false });
        `}
      </Script>

      {loading && <Preloader />}
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;
