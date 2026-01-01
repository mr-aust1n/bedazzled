import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import Head from "next/head";

const CommercialWindowCleaningBlackpool = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Commercial Window Cleaning Blackpool | BeDAZzled</title>
        <meta
          name="description"
          content="Professional commercial window cleaning in Blackpool for offices, schools, hotels, retail units and managed properties. Fully insured and IPAF trained."
        />
        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/commercial-window-cleaning-blackpool"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Commercial Window Cleaning Blackpool",
              serviceType: "Commercial window cleaning",
              areaServed: "Blackpool",
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
        {/*====== Hero Wrapper ======*/}
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
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="Man in a cherry picker cleaning windows"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_cherry_picker_window_clean.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Commercial Window Cleaning in Blackpool
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Reliable commercial window cleaning across Blackpool and
                        the Fylde Coast for offices, schools, hotels and managed
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
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="Men hanging from the top of a high building cleaning windows"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_ipaf_window_cleaner.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-left">
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
                        Bringing a shine to the NorthWest!
                      </p>

                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                fetchpriority="high"
                alt="man with a hand squeege, cleaning a window"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_squeegee_window_clean.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-right">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Commercial
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Window Cleaning for the North West
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
                <h2 className="title">Commercial Window Cleaning in Blackpool</h2>

                <p>
                  BeDAZzled provides reliable commercial window cleaning across
                  Blackpool and the Fylde Coast. We work with offices, schools,
                  hotels, retail units, healthcare buildings and managed properties,
                  delivering consistent results with minimal disruption.
                </p>

                <p>
                  Using purified water systems and IPAF certified access equipment,
                  we clean everything from ground level glazing to multi storey
                  buildings. Our team is fully insured, DBS checked, and trained to
                  work safely on live commercial sites.
                </p>

                <p>
                  If your site requires specialist access, see our{" "}
                  <Link legacyBehavior href="/high-level-window-cleaning">
                    <a>high level window cleaning</a>
                  </Link>{" "}
                  services or combine regular visits with{" "}
                  <Link legacyBehavior href="/gutter-and-fascia-cleaning">
                    <a>gutter and fascia cleaning</a>
                  </Link>
                  .
                </p>

                <h2>Who we work with in Blackpool</h2>
                <ul className="check-style-one mb-45">
                  <li>Offices and business parks</li>
                  <li>Schools and colleges</li>
                  <li>Hotels and leisure venues</li>
                  <li>Retail units and shop fronts</li>
                  <li>Managed residential properties</li>
                </ul>

                <p>
                  Looking for wider coverage? View our{" "}
                  <Link legacyBehavior href="/areas-we-cover">
                    <a>areas we cover</a>
                  </Link>{" "}
                  page or see our{" "}
                  <Link
                    legacyBehavior
                    href="/commercial-window-cleaning-lancashire"
                  >
                    <a>commercial window cleaning in Lancashire</a>
                  </Link>
                  .
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

export default CommercialWindowCleaningBlackpool;

export async function getStaticProps() {
  return {
    props: {},
  };
}
