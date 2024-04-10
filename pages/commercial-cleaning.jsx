import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
const ProjectDetails = () => {
  return (
    <Layout header={3} footer={3}>
      <PageBanner pageName={"Commercial Properties"} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <h3 className="title">Commercial Window Cleans</h3>
            <p>
              Bedazzled is renowned as the premier commercial window cleaning
              service in the North West UK, especially within the Blackpool
              area. Our expertise and dedication to using cutting-edge cleaning
              technologies set us apart, ensuring that every window we touch
              sparkles with unmatched clarity and brilliance. Our team, known
              for its meticulous attention to detail and commitment to
              eco-friendly practices, transforms any commercial facade into a
              beacon of professionalism and beauty. We pride ourselves on
              enhancing your property's aesthetic appeal and value, making a
              lasting impression on visitors and clients alike. In the
              competitive landscape of the North West, where appearance and
              first impressions are crucial, Bedazzled's reputation for
              excellence and unparalleled service shines as brightly as the
              windows we meticulously care for. Choose Bedazzled for a truly
              dazzling finish, where quality and customer satisfaction are
              always crystal clear.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/Office_window_clean.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/Hotel_window_clean.png"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/School_window_clean.png"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Don't delay and get a quote today!</h3>
            <p>
              Elevate the look of your office, school, or hotel in the Blackpool
              area with Bedazzled Commercial Window Cleaning. Our expert team
              delivers unmatched clarity and sparkle to every window, ensuring
              your property stands out. Utilizing eco-friendly methods and the
              latest in cleaning technology, we guarantee a dazzling finish that
              impresses at first glance. Don't settle for anything less than the
              best. Secure your quote today and witness the transformation that
              only Bedazzled can provide. Choose excellence; choose Bedazzled
              for your commercial window cleaning needs.
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
