import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import * as gtag from "@/lib/gtag";
import Head from "next/head";

const Contact = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Contact BeDAZzled | Commercial Cleaning Blackpool</title>

        <meta
          name="description"
          content="Contact BeDAZzled for commercial window cleaning in Blackpool. Request a free quote or speak with our team about your commercial cleaning requirements."
        />

        <link rel="canonical" href="https://www.bedazzledwcs.co.uk/contact" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact BeDAZzled | Commercial Cleaning Blackpool"
        />
        <meta
          property="og:description"
          content="Get in touch with BeDAZzled for professional commercial window cleaning in Blackpool and surrounding areas."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/bg/page-bg-1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/contact"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageBanner pageName={"Contact Us"} />

      {/*====== Start Contact Info section ======*/}
      <section className="contact-info-section pt-100">
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img
                      src="assets/images/icon/icons8-map-pin.gif"
                      alt="icon"
                    />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <h6>168 Penrose Avenue, Blackpool, FY4 4JX</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icons8-email.gif" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <h6>
                      <a
                        href="mailto:bedazzledwcs@gmail.com"
                        onClick={() =>
                          gtag.event({
                            action: "contact",
                            params: { method: "email", location: "footer" },
                          })
                        }
                      >
                        {" "}
                        bedazzledwcs@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img
                      src="assets/images/icon/icons8-phone-ringing.gif"
                      alt="icon"
                    />
                  </div>
                  <div className="info">
                    <span className="title">Phone No</span>
                    <h6>
                      <a
                        href="tel:07773780671"
                        onClick={() =>
                          gtag.event({
                            action: "contact", // GA4 recommended
                            params: { method: "phone", location: "header" },
                          })
                        }
                      >
                        07773780671
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Info section ======*/}
      {/*====== Start Contact section ======*/}
      <section className="contact-section pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*====== Section-title ======*/}
              <div className="section-title wow fadeInRight mb-50">
                <span className="sub-title">
                  <i className="fa fa-tint" />
                  Contact Us
                </span>
                <h2>Ready to Work With Us?</h2>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Map Box ===*/}
                <div className="map-box wow fadeInLeft mb-50">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d150575.19014331404!2d-2.886459351247067!3d53.86531832373216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1707474716973!5m2!1sen!2suk" />
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Contact Form Wrapper ======*/}
                <div className="contact-form-wrapper mb-50 wow fadeInRight">
                  <form
                    action="https://formsubmit.co/craigaustin@me.com"
                    method="POST"
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="form_group">
                      <label>
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-phone-plus" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone Number"
                        name="number"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-map-marker-exclamation" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-pen-fancy" />
                      </label>
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn">
                        Send Messages
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact section ======*/}

      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Contact;
