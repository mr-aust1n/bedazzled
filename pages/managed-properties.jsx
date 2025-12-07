import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Head from "next/head";
const ProjectDetails = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        {/* Meta Description */}
        <meta
          name="description"
          content="Commercial window cleaning for managed properties across Blackpool, Preston, Lytham St Annes and Lancashire. Ideal for apartment blocks, rental portfolios, HMOs and managed buildings requiring reliable, regular cleaning."
        />

        {/* Page Title */}
        <title>
          Managed Property Window Cleaning | Blackpool and Lancashire |
          BeDazzled
        </title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Managed Property Window Cleaning | BeDazzled"
        />
        <meta
          property="og:description"
          content="Specialist window cleaning for managed properties in Blackpool and across Lancashire. Perfect for apartments, rental homes, HMOs and commercial-managed buildings."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/managed_property01.png"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/managed-properties"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed Property Window Cleaning | BeDazzled"
        />
        <meta
          name="twitter:description"
          content="Trusted window cleaning for managed properties across Blackpool, Preston and Lancashire."
        />
        <meta
          name="twitter:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/managed_property01.png"
        />
      </Head>

      <PageBanner pageName={"Managed Properties"} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h3 className="title">Managed Property</h3>
            <p>
              In Blackpool and across Lancashire, BeDAZzled delivers specialist
              commercial window cleaning for managed properties of all sizes.
              Whether you oversee a single building in Lancaster or manage a
              wider portfolio across the Fylde and surrounding areas, our
              service elevates your property’s exterior with a clear,
              professional finish that boosts kerb appeal and long term value.
              Using eco friendly cleaning systems and advanced water fed
              technology, we provide a consistent, streak free shine that
              supports property managers, landlords and letting agents in
              maintaining high standards. Regular window maintenance not only
              improves appearance but also protects glass and frames, reducing
              future repair costs. If you manage properties in Blackpool,
              Lancaster or anywhere in Lancashire, choose BeDAZzled to keep
              every building looking its best. Here, every pane doesn’t just
              shine; it truly Bedazzles.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/managed_property01.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/managed_property02.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/managed_property03.png"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Don't delay and get a quote today!</h3>
            <p>
              Don't let your Blackpool property fade into the background. With
              our bedazzled commercial window cleaning service, we promise more
              than just clarity; we deliver a sparkle that sets you apart.
              Specializing in managed properties, we offer eco-friendly,
              efficient solutions tailored to your needs. Our service not only
              enhances the appearance of your building but also protects its
              value. Time is of the essence—don't delay. Get a quote today and
              transform your property into a dazzling standout that commands
              attention.
            </p>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
            <div className="row">
              <div className="col-md-6">
                <div className="navigation-item prev-post mb-40">
                  <div className="thumb">
                    <a href="/ipaf-cleans">
                      <img
                        src="/assets/images/gallery/thumb-widget-3.jpg"
                        alt="thumb image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="/ipaf-cleans">IPAF High Cleans</a>
                    </h3>
                    <a href="/ipaf-cleans" className="btn-link">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="navigation-item next-post mb-40">
                  <div className="thumb">
                    <a href="/gutters-fascias">
                      <img
                        src="/assets/images/gallery/thumb-widget-2.jpg"
                        alt="thumb image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="/gutters-fascias">Fascia &amp; Gutters</a>
                    </h3>
                    <a href="/gutters-fascias" className="btn-link">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Project-Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ProjectDetails;
