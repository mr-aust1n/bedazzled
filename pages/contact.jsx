import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import * as gtag from "@/lib/gtag";
import Head from "next/head";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("number"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      source: "https://www.bedazzledwcs.co.uk/contact",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/r76gjctruacgfjbqxai5hbnxpa53dpu6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Webhook failed");

      alert("Thanks, your message has been sent.");
      form.reset();
    } catch (err) {
      alert("Message failed to send. Please try again or email us directly.");
    }
  };

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
                            action: "contact",
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
                  <form onSubmit={handleSubmit} className="contact-form">
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
                      <button className="main-btn primary-btn" type="submit">
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

      {/*====== SEO Text Section ======*/}
      <section className="contact-section pt-0 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title mb-25">
                <h3>Commercial Cleaning Quotes in Blackpool and Lancashire</h3>
              </div>

              <p>
                If you need a reliable team for commercial exterior cleaning,
                we’re here to help. BeDAZzled supports businesses across
                Blackpool and the wider Lancashire area with scheduled and one
                off cleans for offices, schools, hotels, retail units and
                managed buildings. Tell us what you need, the building type,
                access details, and how often you’d like cleaning, and we will
                come back with a clear quote and a practical plan.
              </p>

              <p>
                Looking for something specific? View{" "}
                <Link href="/commercial-window-cleaning">
                  commercial window cleaning
                </Link>
                ,{" "}
                <Link href="/high-level-window-cleaning">
                  IPAF high level cleaning
                </Link>{" "}
                for difficult access sites,{" "}
                <Link href="/gutter-and-fascia-cleaning">
                  gutter and fascia cleaning
                </Link>{" "}
                to help prevent blockages and water damage, or{" "}
                <Link href="/managed-property-cleaning">
                  managed property cleaning
                </Link>{" "}
                for apartment blocks, rental portfolios and HMOs.
              </p>

              <p className="mb-0">
                Prefer a quick chat? Call us and we can advise on the safest
                approach for your site, expected timings, and the best schedule
                to keep your property looking professional year round.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Partners />
    </Layout>
  );
};
export default Contact;
