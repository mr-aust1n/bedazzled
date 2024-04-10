import Link from "next/link";
const Footer3 = () => {
  return (
    <footer className="footer-area footer-wave pt-100 p-r z-1">
      <div className="wave-shapes">
        <img
          src="assets/images/shape/wave-shape-1.png"
          className="w-shape one"
          alt="wave shape"
        />
        <img
          src="assets/images/shape/wave-shape-2.png"
          className="w-shape two"
          alt="wave shape"
        />
      </div>
      <div className="footer-wrapper text-white main-bg p-r z-1">
        <div className="shape shape-one animate-float-y">
          {/* <span>
            <img src="assets/images/shape/tree.png" alt="Tree Image" />
          </span> */}
        </div>
        {/* <div className="shape shape-two animate-float-y">
          <span>
            <img src="assets/images/shape/tree2.png" alt="Tree Image" />
          </span>
        </div> */}
        <div className="container">
          {/*====== Footer Widget ======*/}
          <div className="footer-widget-area pt-55 pb-40 p-r z-1">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInDown">
                  <div className="widget-content">
                    <div className="footer-logo mb-25">
                      <Link legacyBehavior href="/index">
                        <a>
                          <img
                            src="assets/images/logo/logo-white.png"
                            alt="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <p>
                      Bedazzled Window Cleaning: Exceptional commercial window
                      cleaning in the North West of England. Trust us for
                      sparkling results that make your business shine.{" "}
                    </p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn filled-btn filled-white">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Get In Touch</h4>
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>168 Penrose Avenue, Blackpool, FY4 4JX</li>
                      <li>
                        <a href="mailto:bedazzledwcs@gmail.com">
                          bedazzledwcs@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+000(123)45688">07773 780671</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget footer-nav-widget mb-40 wow fadeInDown">
                  <h4 className="widget-title">Quick Link</h4>
                  <div className="widget-content">
                    <ul className="footer-nav">
                      <li>
                        <a href="contact">Need a Quote?</a>
                      </li>
                      <li>
                        <a href="services">Our Services</a>
                      </li>
                      <li>
                        <a href="about">About Company</a>
                      </li>
                      <li>
                        <a href="about">Meet Our Team</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                {/*====== Footer Widget ======*/}
                <div className="footer-widget footer-gallery-widget float-lg-right mb-40 wow fadeInUp">
                  <h4 className="widget-title">Services</h4>
                  <div className="widget-content">
                    <ul className="gallery-list">
                      <li>
                        <a href="/managed-properties">
                          <img
                            src="assets/images/gallery/thumb-widget-1.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/gutters-fascias">
                          <img
                            src="assets/images/gallery/thumb-widget-2.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/ipaf-cleans">
                          <img
                            src="assets/images/gallery/thumb-widget-3.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/commercial-cleaning">
                          <img
                            src="assets/images/gallery/thumb-widget-4.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/about">
                          <img
                            src="assets/images/gallery/thumb-widget-5.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <img
                            src="assets/images/gallery/thumb-widget-6.jpg"
                            alt="Image"
                          />
                          <div className="hover-overlay">
                            <i className="fas fa-arrow-right" />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Copyright Area ===*/}
          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6">
                {/*====== Copyright Text ======*/}
                <div className="copyright-text">
                  <p>Website by www.craigaust.in Copy© 2024</p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Copyright Nav ======*/}
                <div className="copyright-nav float-lg-right">
                  {/* <ul>
                    <li>
                      <a href="#">Setting &amp; Privacy</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Food Menu</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;
