import Link from "next/link";
import { Modal } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Modal
      className="modal fade sidebar-panel-wrapper"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-content">
        <button className="close" data-dismiss="modal" onClick={handleClose}>
          <i className="far fa-times" />
        </button>
        <div className="sidebar-wrapper">
          <div className="sidebar-information-area">
            <div className="row no-gutters">
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <Link legacyBehavior href="/index">
                    <a className="footer-logo">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>
                  Elevate your business with Bedazzled, the North West's leading choice for pristine window cleaning. Specialising in showrooms and offices, our certified team uses cutting-edge technology and eco-friendly solutions for a radiant finish. Experience first-class service and unmatched professionalism. Contact us now for a free, no-obligation quote.
                  </p>
                  {/* <div className="social-item">
                    <h6>Follow Us</h6>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <h4 className="title">Get In Touch</h4>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-map-marker-alt" />
                      Location:
                    </h6>
                    <p>168 Penrose Avenue, Blackpool, FY4 4JX</p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-envelope-open" />
                      Email Us:
                    </h6>
                    <p>
                      <a href="mailto:sbedazzledwcs@gmail.com">bedazzledwcs@gmail.com</a>
                    </p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-phone-plus" />
                      Phone:
                    </h6>
                    <p>
                      <a href="tel:07773 780671">07773 780671</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">

                <div className="social-item">
                    <h6>Follow Us</h6>
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/bedazzledwcs/?locale=en_GB" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li> */}
                      {<li>
                        <a href="https://www.tiktok.com/@bedazzledwcs"target="_blank">
                          <i className="fab fa-tiktok" />
                        </a>
                      </li>}
                      <li>
                        <a href="https://www.instagram.com/bedazzledwcs/" target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <h4 className="title">Newsletter</h4> */}
                  {/* <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        required
                      />
                      <button className="main-btn secondary-btn">
                        Subscribe Now
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-gallery pt-80">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/high-level-cleans.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/Ipaf-high-cleans.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/squeegee-cleaning.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/squeegee-window-cleaner.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/outside-window-cleaning.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/window-being-cleaned.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="service"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-tint" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Sidebar;
