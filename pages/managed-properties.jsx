import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
const ProjectDetails = () => {
  return (
    <Layout header={3} footer={3}>
      <PageBanner pageName={"Managed Properties"} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h3 className="title">Managed Property</h3>
            <p>
              In Blackpool and the north west, Bedazzled window cleaning
              services transform managed properties into standout gems. Perfect
              for single properties or portfolios, we will elevate your
              building’s facade beyond mere cleanliness to a dazzling shine,
              enhancing curb appeal and property value. Our eco-friendly
              solutions and advanced techniques ensure a sparkling, impressive
              finish every time. Regular maintenance with our service not only
              beautifies but also preserves your windows, saving on future
              costs. Elevate your Blackpool property's image and longevity with
              our exceptional window cleaning service—where every pane doesn’t
              just shine; it Bedazzles.
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
