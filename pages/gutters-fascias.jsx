import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
const ProjectDetails = () => {
  return (
    <Layout header={3} footer={3}>
      <PageBanner pageName={"Fascia & Gutters"} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h3 className="title">Fascia & Gutters</h3>
            <p>
              Bedazzled excels in the meticulous cleaning of your company’s
              fascias and gutters, ensuring your property in the North West UK,
              particularly around Blackpool, showcases its best self. A
              well-maintained exterior is vital not just for aesthetics but for
              the health of your facia. Clean fascias and gutters prevent water
              damage, safeguard against structural issues, and eliminate the
              need for expensive repairs. Our expert team uses the latest
              techniques and eco-friendly solutions to remove debris, ensuring
              smooth water flow and protecting your property against the UK’s
              unpredictable weather. Regular maintenance of fascias and gutters
              with Bedazzled enhances your building’s longevity and curb appeal,
              projecting a professional image to clients and visitors alike.
              Trust Bedazzled to preserve and beautify your property’s exterior,
              a smart investment in your company’s future.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/gutter_clean01.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/gutter_clean02.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/gutter_clean03.png"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Don't delay and get a quote today!</h3>
            <p>
              Don't let clogged gutters or unsightly fascias detract from your
              company's professional appearance. In the Blackpool area and
              beyond, Bedazzled specializes in making your property look its
              best with top-tier gutter and fascia cleaning services. Our expert
              team ensures that your building's exterior is not just clean, but
              smart and welcoming, preventing water damage and boosting curb
              appeal. Delay no more—get a quote today and invest in the
              longevity and aesthetics of your property. With Bedazzled,
              excellence is just a service away.
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
                    <a href="/managed-properties">
                      <img
                        src="/assets/images/gallery/thumb-widget-1.jpg"
                        alt="thumb image"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="/managed-properties">Managed Properties</a>
                    </h3>
                    <a href="/managed-properties" className="btn-link">
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
