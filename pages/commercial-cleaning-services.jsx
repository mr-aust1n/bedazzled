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
                services across Blackpool and Lancashire. We help businesses
                keep their premises clean, safe, and professional with reliable
                scheduling and consistent results.
              </p>

              <p>
                Our commercial cleaning services are designed for organisations
                that need a trusted contractor to maintain their buildings
                without disruption. From small business premises to large
                commercial sites, we tailor every clean to suit your access
                requirements and operating hours.
              </p>

              <h3 className="mt-35">Who we work with</h3>

              <p>
                We work with offices, schools, colleges, hotels, retail units,
                leisure venues, healthcare sites, car showrooms, and managed
                residential properties throughout Blackpool and the wider
                Lancashire area.
              </p>

              <p>
                Many of our clients require early morning, out of hours, or
                scheduled maintenance cleaning to avoid disruption to staff,
                customers, and residents. Our team plans each visit carefully to
                ensure work is completed efficiently and safely.
              </p>

              <h3 className="mt-35">Services we provide</h3>

              <p>
                Our commercial cleaning services include{" "}
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

              <h3 className="mt-35">Safe, professional and fully insured</h3>

              <p>
                BeDAZzled operates with a strong focus on safety, reliability,
                and compliance. Our team is fully insured and trained to work on
                commercial premises of all sizes. For high level work, we use
                IPAF certified operatives and appropriate access equipment.
              </p>

              <p>
                Regular commercial exterior cleaning helps protect your
                building, reduce long term maintenance costs, and maintain a
                positive first impression for customers and visitors. We work
                with you to create a cleaning schedule that keeps your property
                looking its best all year round.
              </p>

              <h3 className="mt-35">Get a quote</h3>

              <p className="mb-15">
                If you are looking for a reliable commercial cleaning company in
                Blackpool or across Lancashire, contact BeDAZzled today for a
                fast, no obligation quote and a clear plan tailored to your
                site.
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
