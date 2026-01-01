import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import Head from "next/head";

const AreasWeCover = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Areas We Cover | Commercial Window Cleaning | BeDAZzled</title>
        <meta
          name="description"
          content="Areas we cover across Blackpool, the Fylde Coast and Lancashire. Commercial window cleaning, managed property cleaning, high-level IPAF work, gutters and fascias."
        />
        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/areas-we-cover"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Areas We Cover | Commercial Window Cleaning | BeDAZzled"
        />
        <meta
          property="og:description"
          content="See where we work across Blackpool, the Fylde Coast and Lancashire, plus what services we offer in each area."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/hero/hero_cherry_picker_window_clean.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/areas-we-cover"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BeDAZzled Commercial Window Cleaning",
              url: "https://www.bedazzledwcs.co.uk",
              image:
                "https://www.bedazzledwcs.co.uk/assets/images/hero/hero_cherry_picker_window_clean.jpg",
              areaServed: [
                "Blackpool",
                "Lytham St Annes",
                "Poulton-le-Fylde",
                "Thornton-Cleveleys",
                "Bispham",
                "Fleetwood",
                "Fylde Coast",
                "Lancashire",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Window Cleaning",
                    url: "https://www.bedazzledwcs.co.uk/commercial-window-cleaning",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Managed Property Cleaning",
                    url: "https://www.bedazzledwcs.co.uk/managed-property-cleaning",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "High-Level Window Cleaning",
                    url: "https://www.bedazzledwcs.co.uk/high-level-window-cleaning",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gutter and Fascia Cleaning",
                    url: "https://www.bedazzledwcs.co.uk/gutter-and-fascia-cleaning",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img
              src="assets/images/hero/bg-2.png"
              className="waves one"
              alt="Decorative wave background"
            />
            <img
              src="assets/images/hero/bg.png"
              className="waves two"
              alt="Decorative wave background"
            />
          </div>

          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_cherry_picker_window_clean.jpg)",
              }}
              aria-label="Cherry picker high-level window cleaning"
              role="img"
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="hero-content text-center">
                    <span className="sub-title">BeDAZzled</span>
                    <h1>Areas We Cover</h1>
                    <p>
                      We provide commercial window cleaning and exterior
                      cleaning across Blackpool, the Fylde Coast and wider
                      Lancashire. From managed properties and offices to
                      high-level IPAF work, gutters, fascias and conservatories,
                      we keep your premises looking sharp, safe and well
                      maintained.
                    </p>
                    <div className="hero-button mb-30">
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn filled-btn filled-white mb-10">
                          Request a quote
                        </a>
                      </Link>
                      <Link legacyBehavior href="/commercial-cleaning-services">
                        <a className="main-btn filled-btn filled-white mb-10">
                          View our services
                        </a>
                      </Link>
                    </div>

                    <p style={{ marginTop: 10 }}>
                      Looking for a specific area? Start with{" "}
                      <Link
                        legacyBehavior
                        href="/commercial-window-cleaning-blackpool"
                      >
                        <a>Blackpool</a>
                      </Link>{" "}
                      or{" "}
                      <Link
                        legacyBehavior
                        href="/commercial-window-cleaning-lancashire"
                      >
                        <a>Lancashire</a>
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}

      {/*====== Start Intro Section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h2 className="title">
              Commercial window cleaning across the North West
            </h2>
            <p>
              If your building is customer-facing, clean glass and tidy
              exteriors help protect your image. We work with offices, schools,
              hotels, retail units, industrial sites and managed properties,
              offering scheduled or one-off cleans with minimal disruption.
            </p>
            <p>
              For specialist work, see{" "}
              <Link legacyBehavior href="/high-level-window-cleaning">
                <a>high-level window cleaning</a>
              </Link>{" "}
              or combine services with{" "}
              <Link legacyBehavior href="/gutter-and-fascia-cleaning">
                <a>gutter and fascia cleaning</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      {/*====== End Intro Section ======*/}

      {/*====== Start Areas Grid Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <i className="fa fa-map-marker-alt"></i>
                  Our coverage
                </span>
                <h2>Primary service areas</h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                  We are based in the North West and focus on commercial work.
                  If you are just outside the locations below, still get in
                  touch, we regularly cover nearby towns depending on the job.
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="btn-link">
                    Check availability
                    <i className="far fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Blackpool */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-thumb-item-two mb-40 wow fadeInDown">
                <div className="text">
                  <div className="icon">
                    <i className="fa fa-city"></i>
                  </div>
                  <h5 className="title">Blackpool</h5>
                  <p>
                    Commercial window cleaning across Blackpool, including
                    offices, schools, hotels, retail units and managed
                    properties.
                  </p>
                  <Link
                    legacyBehavior
                    href="/commercial-window-cleaning-blackpool"
                  >
                    <a className="btn-link">
                      View Blackpool page{" "}
                      <i className="far fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fylde Coast */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-thumb-item-two mb-40 wow fadeInUp">
                <div className="text">
                  <div className="icon">
                    <i className="fa fa-water"></i>
                  </div>
                  <h5 className="title">Fylde Coast</h5>
                  <p>
                    Lytham St Annes, Poulton-le-Fylde, Thornton-Cleveleys,
                    Bispham and Fleetwood, plus surrounding areas.
                  </p>
                  <Link legacyBehavior href="/contact">
                    <a className="btn-link">
                      Request a quote{" "}
                      <i className="far fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Lancashire */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="features-thumb-item-two mb-40 wow fadeInDown">
                <div className="text">
                  <div className="icon">
                    <i className="fa fa-map"></i>
                  </div>
                  <h5 className="title">Lancashire</h5>
                  <p>
                    Wider Lancashire coverage for commercial sites and managed
                    properties, including scheduled cleans.
                  </p>
                  <Link
                    legacyBehavior
                    href="/commercial-window-cleaning-lancashire"
                  >
                    <a className="btn-link">
                      View Lancashire page{" "}
                      <i className="far fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Optional list for extra towns (good for relevance without creating thin pages) */}
          <div className="row">
            <div className="col-12">
              <div className="project-details-wrapper pb-60">
                <h3>Nearby towns we often cover</h3>
                <p>
                  Coverage depends on job size and scheduling, but we regularly
                  work around: Preston, Lancaster, Lytham St Annes,
                  Poulton-le-Fylde, Thornton-Cleveleys, Fleetwood, Bispham,
                  Kirkham and surrounding commercial areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Areas Grid Section ======*/}

      {/*====== Start Services Linking Section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h2 className="title">What we do in every area</h2>
            <p>
              Wherever you are in our coverage area, the core service stays the
              same: reliable commercial cleaning, safe access, and a consistent
              finish. Most clients book regular cleans, but we also handle
              one-off work.
            </p>

            <ul className="check-style-one mb-45">
              <li>
                <i className="far fa-check" />{" "}
                <Link legacyBehavior href="/commercial-cleaning-services">
                  <a>Commercial window cleaning</a>
                </Link>
              </li>
              <li>
                <i className="far fa-check" />{" "}
                <Link legacyBehavior href="/managed-property-cleaning">
                  <a>Managed property cleaning</a>
                </Link>
              </li>
              <li>
                <i className="far fa-check" />{" "}
                <Link legacyBehavior href="/high-level-window-cleaning">
                  <a>High-level IPAF work</a>
                </Link>
              </li>
              <li>
                <i className="far fa-check" />{" "}
                <Link legacyBehavior href="/gutter-and-fascia-cleaning">
                  <a>Gutter and fascia cleaning</a>
                </Link>
              </li>
            </ul>

            <p>
              Ready to book? Use{" "}
              <Link legacyBehavior href="/contact">
                <a>our contact page</a>
              </Link>{" "}
              and tell us your postcode, building type, and access details.
            </p>
          </div>
        </div>
      </section>
      {/*====== End Services Linking Section ======*/}

      {/*====== Start FAQ Section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h2 className="title">Areas we cover FAQs</h2>

            <h3>Do you only work in Blackpool?</h3>
            <p>
              No. Blackpool is a key area, but we cover the Fylde Coast and
              wider Lancashire for commercial sites and managed properties.
            </p>

            <h3>Can you cover a town that is not listed?</h3>
            <p>
              Often, yes. If you are nearby, send your postcode and job details
              via{" "}
              <Link legacyBehavior href="/contact">
                <a>our contact form</a>
              </Link>{" "}
              and we will confirm availability.
            </p>

            <h3>Do you provide high-level access across all areas?</h3>
            <p>
              Yes, subject to access and site requirements. See{" "}
              <Link legacyBehavior href="/high-level-window-cleaning">
                <a>high-level window cleaning</a>
              </Link>{" "}
              for details.
            </p>

            <p>
              For more answers, visit{" "}
              <Link legacyBehavior href="/faqs">
                <a>FAQs</a>
              </Link>{" "}
              or read{" "}
              <Link legacyBehavior href="/reviews">
                <a>customer reviews</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      {/*====== End FAQ Section ======*/}
    </Layout>
  );
};

export default AreasWeCover;

export async function getStaticProps() {
  return {
    props: {},
  };
}
