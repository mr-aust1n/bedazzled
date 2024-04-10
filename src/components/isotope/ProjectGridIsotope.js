import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProjectGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="gallery-section pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            {/*====== Section Title ======*/}
            <div className="section-title mb-40">
              <span className="sub-title">
                <i className="fa fa-tint" />
                Bedazzled Services
              </span>
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/*====== Filter Button ======*/}
            <ul className="project-filter mb-50">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              <li
                onClick={handleFilterKeyChange("cat-mp")}
                className={activeBtn("cat-mp")}
              >
                Managed Properties
              </li>
              {/* <li
                onClick={handleFilterKeyChange("cat-mp")}
                className={activeBtn("cat-mp")}
              ></li> */}

              <li
                onClick={handleFilterKeyChange("cat-ipaf")}
                className={activeBtn("cat-ipaf")}
              >
                IPAF High Level Work
              </li>
              <li
                onClick={handleFilterKeyChange("cat-gut")}
                className={activeBtn("cat-gut")}
              >
                Fascia &amp; Gutters
              </li>
              <li
                onClick={handleFilterKeyChange("cat-soh")}
                className={activeBtn("cat-soh")}
              >
                Schools, Offices and Hotels
              </li>
            </ul>
          </div>
        </div>
        <div className="row gallery-active">
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-mp">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/managed_property01.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/managed-properties">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/managed-properties">
                          <a>Managed Properties</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/managed-properties">
                        <a>Preston</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-ipaf">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery/IPAF_01.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/ipaf-cleans">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/ipaf-cleans">
                          <a>IPAF High Cleans</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/ipaf-cleans">
                        <a>Fleetwood</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-gut cat-all">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gutter_clean01.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="gutters-fascias">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="gutters-fascias">
                          <a>Gutters &amp; Fascias</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="gutters-fascias">
                        <a>Lytham</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-ipaf">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/IPAF_02.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/ipaf-cleans">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/ipaf-cleans-cleans">
                          <a>IPAF High Cleans</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/ipaf-cleans">
                        <a>St Anne's</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-gut cat-all">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gutter_clean02.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="gutters-fascias">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="gutters-fascias">
                          <a>Fascias  &amp; Gutters</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="gutters-fascias">
                        <a>Little Marton</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-soh">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInRight">
              <div className="project-img">
                <img
                  src="assets/images/gallery/School_window_clean.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/commercial-cleaning">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/commercial-cleaning">
                          <a>Schools, Offices &amp; Hotels</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/commercial-cleaning">
                        <a>Bispham</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-soh">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery/Office_window_clean.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/commercial-cleaning">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/commercial-cleaning">
                          <a>Offices, Hotels &amp; Schools</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/commercial-cleaning">
                        <a>Blackpool</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-mp">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/managed_property02.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/managed-properties">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/managed-properties">
                          <a>Managed Properties</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/managed-properties">
                        <a>Lytham St Annes</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-gut cat-all">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gutter_clean03.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="gutters-fascias">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="gutters-fascias">
                          <a>Gutters &amp; Fascias</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="gutters-fascias">
                        <a>Mythop</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-ipaf">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/IPAF_03.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/ipaf-cleans">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/ipaf-cleans">
                          <a>IPAF High Cleans</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/ipaf-cleans">
                        <a>Blackpool</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-soh">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery/Hotel_window_clean.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/commercial-cleaning">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/commercial-cleaning">
                          <a>Hotels, Offices &amp; Schools</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/commercial-cleaning">
                        <a>Blackpool, Seafront</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-all cat-mp">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery/managed_property03.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/managed-properties">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/managed-properties">
                          <a>Managed Properties</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/managed-properties">
                        <a>Highcross Park </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectGridIsotope;
