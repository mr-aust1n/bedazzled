import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);

const ProjectGrid = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Commercial Cleaning Services Blackpool | BeDAZzled</title>

        <meta
          name="description"
          content="Commercial cleaning services in Blackpool for offices, schools, hotels and managed properties. Reliable, professional cleaning by BeDAZzled."
        />

        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/commercial-cleaning-services"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Cleaning Services Blackpool | BeDAZzled"
        />
        <meta
          property="og:description"
          content="Professional commercial cleaning services in Blackpool for offices, schools, hotels and managed properties."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/cta-1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/commercial-cleaning-services"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageBanner
        pageName={
          "Services - Commercial Window Cleaning Across Blackpool and Lancashire for Offices, Shops and Commercial Sites"
        }
      />

      {/*====== Start Gallery section ======*/}
      <ProjectGridIsotope />
      {/*====== End Gallery section ======*/}
      <Partners />

      {/* SEO section */}
      <section className="pt-60 pb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2>Commercial cleaning services for busy sites</h2>

              <p>
                BeDAZzled provides dependable commercial exterior cleaning
                across Blackpool and Lancashire. We help businesses keep
                premises presentable, safe, and professional with consistent
                results and straightforward scheduling.
              </p>

              <p>
                We work with offices, schools, hotels, retail sites, and managed
                properties. Choose a one off clean or a regular maintenance plan
                to suit your building and access requirements.
              </p>

              <h3 className="mt-35">Services we provide</h3>
              <p>
                Our services include{" "}
                <a href="/commercial-window-cleaning">
                  commercial window cleaning
                </a>{" "}
                for offices, retail units, and business premises,{" "}
                <a href="/managed-property-cleaning">
                  managed property cleaning
                </a>{" "}
                for apartment blocks, residential developments, and HMOs,{" "}
                <a href="/high-level-window-cleaning">
                  IPAF high level window cleaning
                </a>{" "}
                for difficult access and multi storey buildings, and{" "}
                <a href="/gutter-and-fascia-cleaning">
                  gutter and fascia cleaning
                </a>{" "}
                to help prevent blockages, leaks, and long term water damage.
              </p>

              <h3 className="mt-35">Get a quote</h3>
              <p className="mb-15">
                If you need a reliable commercial cleaning company in Blackpool
                or across Lancashire, contact BeDAZzled for a fast quote and a
                clear plan.
              </p>

              <a className="main-btn primary-btn" href="/contact">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectGrid;
