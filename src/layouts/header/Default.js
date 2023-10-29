import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
const Default = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <header className="header-area header-two">
        <div className="container-fluid">
          {/*====== Header Top Bar ======*/}
          <div className="header-top-bar text-white main-bg d-none d-xl-block">
            <div className="row">
              <div className="col-lg-6">
                {/*====== Top Left ======*/}
                <div className="top-left">
                  <span>
                    Welcome to Bedazzled Comerical Window Cleaning
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Top Right ======*/}
                <div className="top-right float-lg-right">
                  <ul className="social-link">
                    <li>
                      <a href="https://www.facebook.com/bedazzledwcs/?locale=en_GB" target="_blank" >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com/@bedazzledwcs" target="_blank" >
                        <i className="fab fa-tiktok" />
                      </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/bedazzledwcs/" target="_blank" >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    {/* <li>
                    <a href="https://www.facebook.com/bedazzledwcs/?locale=en_GB" target="_blank" >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*====== Header Middle ======*/}
          <div className="header-middle d-none d-xl-block">
            <div className="row align-items-center">
              <div className="col-lg-9">
                {/*====== Information Wrapper ======*/}
                <div className="information-wrapper">
                  <div className="row">
                    <div className="col-lg-4">
                      {/*====== Single Information Item ======*/}
                      <div className="single-information-item">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <span>Locations</span>
                          <h5>168 Pentrose Street, Blackpool</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      {/*====== Single Information Item ======*/}
                      <div className="single-information-item">
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <span>Email Us</span>
                          <h5>
                            <a href="mailto:bedazzledwcs@gmail.com">
                            bedazzledwcs@gmail.com
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      {/*====== Single Information Item ======*/}
                      <div className="single-information-item">
                        <div className="icon">
                          <i className="far fa-phone-plus" />
                        </div>
                        <div className="info">
                          <span>Telephone</span>
                          <h5>
                            <a href="tel:07773780671">07773 780671</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== menu Right Item ======*/}
                <div className="menu-right-item">
                  <span
                    className="search-btn"
                    data-toggle="modal"
                    data-target="#search-modal"
                    onClick={() => setSearchModal(true)}
                  >
                    <i className="far fa-search" />
                  </span>
                  <span
                    className="bar-btn"
                    data-toggle="modal"
                    data-target="#sidebar-modal"
                    onClick={handleShow}
                  >
                    <img src="assets/images/bar.png" alt="Image" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*====== Header Navigation ======*/}
          <div className="header-navigation d-xl-block d-none">
            <div className="nav-overlay" />
            <div className="primary-menu">
              {/*====== Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-white-two.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="/index">
                  <a className="sticky-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*====== Nav Menu ======*/}
              <div className="nav-menu">
                {/*====== Site Branding ======*/}
                <div className="mobile-logo mb-30 d-block d-xl-none">
                  <Link legacyBehavior href="/index">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
               
                {/*====== main Menu ======*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*====== Nav Right Item ======*/}
              <div className="nav-right-item">              
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Get a Quote</a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <MobileMenu
            handleShow={handleShow}
            logo="assets/images/logo/logo-white-two.png"
          />
        </div>
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Default;
