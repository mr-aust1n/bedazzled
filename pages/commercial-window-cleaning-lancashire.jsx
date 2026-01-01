import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import Head from "next/head";

const CommercialWindowCleaningLancashire = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Commercial Window Cleaning Lancashire | BeDAZzled</title>
        <meta
          name="description"
          content="Professional commercial window cleaning across Lancashire for offices, schools, hotels, retail units and managed properties. Fully insured and IPAF trained."
        />
        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/commercial-window-cleaning-lancashire"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Commercial Window Cleaning Lancashire",
              serviceType: "Commercial window cleaning",
              areaServed: "Lancashire",
              provider: {
                "@type": "LocalBusiness",
                name: "BeDAZzled Commercial Window Cleaning",
                url: "https://www.bedazzledwcs.co.uk",
              },
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
              alt="top wave of hero"
            />
            <img
              src="assets/images/hero/bg.png"
              className="waves two"
              alt="bottom wave of hero"
            />
          </div>

          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="Cherry picker high level window cleaning"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_cherry_picker_window_clean.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Commercial Window Cleaning in Lancashire
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Professional commercial window cleaning across
                        Lancashire for offices, schools, hotels and managed
                        properties.
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Request a quote
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="IPAF high level commercial window cleaning"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_ipaf_window_cleaner.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="hero-content text-left">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Commercial Cleaning
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Supporting businesses across Lancashire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="Traditional window cleaning"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_squeegee_window_clean.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="hero-content text-right">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Window Cleaning
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Reliable service across the North West
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Contact Us!
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}

      <section className="project-details-section pt-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="project-details-wrapper pb-60">
                <h2 className="title">
                  Commercial Window Cleaning Across Lancashire
                </h2>

                <p>
                  BeDAZzled delivers dependable commercial window cleaning
                  across Lancashire, supporting businesses, public sector
                  buildings and managed properties that require consistent,
                  professional exterior maintenance.
                </p>

                <p>
                  We work across larger sites, multi location portfolios and
                  buildings that require specialist access. Using purified water
                  systems and IPAF certified equipment, we safely clean from
                  ground level to high elevation glazing.
                </p>

                <p>
                  Our services are often paired with{" "}
                  <Link legacyBehavior href="/managed-property-cleaning">
                    <a>managed property cleaning</a>
                  </Link>{" "}
                  and{" "}
                  <Link legacyBehavior href="/gutter-and-fascia-cleaning">
                    <a>gutter and fascia cleaning</a>
                  </Link>{" "}
                  to keep sites presentation ready year round.
                </p>

                <h2>Who we support across Lancashire</h2>
                <ul className="check-style-one mb-45">
                  <li>Commercial offices and business parks</li>
                  <li>Schools, colleges and education facilities</li>
                  <li>Hotels, leisure and hospitality venues</li>
                  <li>Retail parks and shop fronts</li>
                  <li>Managed residential and mixed use properties</li>
                </ul>

                <p>
                  If you are looking for a more local service, start with{" "}
                  <Link
                    legacyBehavior
                    href="/commercial-window-cleaning-blackpool"
                  >
                    <a>commercial window cleaning in Blackpool</a>
                  </Link>{" "}
                  or view our full{" "}
                  <Link legacyBehavior href="/areas-we-cover">
                    <a>areas we cover</a>
                  </Link>{" "}
                  page.
                </p>

                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Request a quote</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
    </Layout>
  );
};

export default CommercialWindowCleaningLancashire;

export async function getStaticProps() {
  return {
    props: {},
  };
}
