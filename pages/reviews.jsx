// pages/reviews.jsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/src/layouts/Layout";
import PageBanner from "@/src/components/PageBanner";
import Head from "next/head";

const AUTO_REDIRECT_AFTER_SECONDS = 60;
// Set to true to enable the redirect.
const ENABLE_AUTO_REDIRECT = true;

export default function Reviews() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(AUTO_REDIRECT_AFTER_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!ENABLE_AUTO_REDIRECT) return;
    if (secondsLeft === 0) {
      router.push("/");
    }
  }, [secondsLeft, router]);

  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Customer Reviews | BeDAZzled Cleaning Blackpool</title>

        <meta
          name="description"
          content="Read genuine customer reviews for BeDAZzled, trusted commercial window cleaners in Blackpool. See why businesses rely on our professional service."
        />

        <link rel="canonical" href="https://www.bedazzledwcs.co.uk/reviews" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Customer Reviews | BeDAZzled Cleaning Blackpool"
        />
        <meta
          property="og:description"
          content="Real reviews from businesses that trust BeDAZzled for commercial window cleaning in Blackpool."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/testimonial/facebook_testimonial.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/reviews"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="pt-95 pb-80">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-40">
                <span className="sub-title">
                  <i className="fa fa-tint" />
                  Share your experience
                </span>
                <h1>Leave a Review for BeDAZzled Window Cleaning</h1>
                <p className="mt-15">
                  Your feedback helps neighbours choose a reliable window
                  cleaner and helps us keep improving.
                </p>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="row justify-content-center">
            {/* GOOGLE */}
            <div className="col-lg-5 col-md-6 mb-30">
              <div className="about-features-item text-center p-4">
                <div
                  className="hover-bg bg_cover"
                  style={{
                    backgroundImage:
                      "url(/assets/images/about/about_bedazzled_blur.png)",
                  }}
                ></div>

                <div className="icon">
                  <i className="fab fa-google" aria-hidden="true" />
                </div>

                <div className="text">
                  <h3 className="title">Review us on Google</h3>
                  <p>Tap below to leave a quick Google review.</p>
                  <a
                    className="main-btn secondary-btn mt-10"
                    href="https://g.page/r/CY7HNQoh3dEmEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leave a review for Bedazzled on Google"
                    onClick={() =>
                      window.gtag &&
                      gtag("event", "click_outbound", {
                        destination: "Google_reviews",
                        location: "reviews_page",
                      })
                    }
                  >
                    Open Google Reviews
                  </a>
                </div>
              </div>
            </div>
            ;{/* FACEBOOK */}
            <div className="col-lg-5 col-md-6 mb-30">
              <div className="about-features-item text-center p-4">
                <div
                  className="hover-bg bg_cover"
                  style={{
                    backgroundImage:
                      "url(/assets/images/about/about_bedazzled_blur.png)",
                  }}
                ></div>

                <div className="icon">
                  <i className="fab fa-facebook-square" aria-hidden="true" />
                </div>

                <div className="text">
                  <h3 className="title">Review us on Facebook</h3>
                  <p>Tap below to open our Facebook reviews page.</p>
                  <a
                    className="main-btn secondary-btn mt-10"
                    href="https://www.facebook.com/bedazzledwcs/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leave a review for Bedazzled on Facebook"
                    onClick={() =>
                      window.gtag &&
                      gtag("event", "click_outbound", {
                        destination: "Facebook_reviews",
                        location: "reviews_page",
                      })
                    }
                  >
                    Open Facebook Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*====== SEO Text Section ======*/}
          <section className="pt-0 pb-60">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-title mb-25">
                    <h3>Leave a Review for BeDAZzled Window Cleaning</h3>
                  </div>

                  <p>
                    This page allows customers to leave a genuine review for
                    BeDAZzled Commercial Window Cleaning on Google or Facebook.
                    Reviews help local businesses stand out and help other
                    customers choose a reliable and professional window cleaning
                    company in Blackpool and Lancashire.
                  </p>

                  <p>
                    If we have recently carried out commercial window cleaning,
                    managed property cleaning, IPAF high level window cleaning,
                    or gutter and fascia cleaning for your premises, your
                    feedback is greatly appreciated. Honest reviews help us
                    improve our service and support other businesses looking for
                    dependable commercial cleaners.
                  </p>

                  <p className="mb-0">
                    Simply choose Google or Facebook above to leave your review.
                    It only takes a moment and directly supports a local,
                    independent cleaning company.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Countdown + Redirect */}
          <div className="row justify-content-center mt-10">
            <div className="col-lg-8 text-center">
              <div className="section-title mb-10">
                <h4 className="mb-10">
                  Thank you for supporting a local business
                </h4>

                <p className="mb-5">
                  {ENABLE_AUTO_REDIRECT ? (
                    <>
                      Returning to the homepage in{" "}
                      <strong>{secondsLeft}s</strong>.
                    </>
                  ) : (
                    "Use the links above to leave a review, then continue browsing."
                  )}
                </p>

                {ENABLE_AUTO_REDIRECT && (
                  <div className="mt-10">
                    <Link legacyBehavior href="/">
                      <a className="btn-link">
                        Go back now! <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
