import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Head from "next/head";

const ProjectDetails = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>High Level Window Cleaning Blackpool | BeDAZzled</title>

        <meta
          name="description"
          content="IPAF certified high level window cleaning in Blackpool for commercial buildings. Safe, compliant and professional cleaning at height by BeDAZzled."
        />

        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/high-level-window-cleaning"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="High Level Window Cleaning Blackpool | BeDAZzled"
        />
        <meta
          property="og:description"
          content="IPAF certified high level window cleaning in Blackpool for commercial properties."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/IPAF_01.png"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/high-level-window-cleaning"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageBanner
        pageName={"IPAF High Level Cleaning for Commercial Buildings"}
      />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h3 className="title">High Level Cleans (IPAF)</h3>
            <p>
              Elevate your property's appeal with Bedazzled, your trusted
              partner in high-level commercial window cleaning. At Bedazzled, we
              pride ourselves on our commitment to excellence and safety,
              ensuring every project meets the highest standards. Our team is
              IPAF-certified, granting us the expertise to operate powered
              access equipment safely and efficiently. The International Powered
              Access Federation (IPAF) promotes the safe and effective use of
              powered access worldwide. To learn more about IPAF and its
              significance, visit{" "}
              <a href="https://www.ipaf.org/en-gb/about-ipaf" target="_blank">
                <stong>HERE</stong>{" "}
              </a>{" "}
              .
              <br /> This certification means Bedazzled is equipped to handle
              even the most challenging cleans, from towering skyscrapers to
              historic buildings, ensuring every window sparkles with
              professional precision. Our services aren't just about cleaning;
              they're about providing a seamless, high-quality experience that
              protects and enhances your property's value. Choose Bedazzled for
              unparalleled cleanliness and shine.
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/IPAF_01.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/IPAF_02.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/IPAF_03.png"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Don't delay and get a quote today!</h3>
            <p>
              Elevate your commercial space with Bedazzled Window Cleaning,
              proudly IPAF-certified for high-reach projects. Our expertise
              ensures safety and brilliance in every job, from towering office
              buildings to intricate architectural designs. With
              state-of-the-art equipment and eco-friendly practices, we
              guarantee a bedazzled finish that enhances your property's appeal.
              Don't compromise on quality; secure a quote today and witness the
              transformation. Choose excellence, choose Bedazzled.
            </p>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
            <div className="row">
              <div className="col-md-6">
                <div className="navigation-item prev-post mb-40">
                  <div className="thumb">
                    <a href="/commercial-window-cleaning">
                      <img
                        src="/assets/images/gallery/thumb-widget-4.jpg"
                        alt="thumb image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="/commercial-window-cleaning">
                        Schools, Offices &amp; Hotels
                      </a>
                    </h3>
                    <a href="/commercial-window-cleaning" className="btn-link">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="navigation-item next-post mb-40">
                  <div className="thumb">
                    <a href="/gutter-and-fascia-cleaning">
                      <img
                        src="/assets/images/gallery/thumb-widget-2.jpg"
                        alt="thumb image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="/gutter-and-fascia-cleaning">
                        Fascia &amp; Gutters
                      </a>
                    </h3>
                    <a href="/gutter-and-fascia-cleaning" className="btn-link">
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
