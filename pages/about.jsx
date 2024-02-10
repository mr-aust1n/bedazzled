import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout header={3}  footer={3}>
      <PageBanner pageName={"About"} />
      <section className="about-section pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title">
                  <i className="fa fa-tint" />
                  About BeDAZzled
                </span>
                <h2>Spotless views, every time.</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-content-box mb-50 wow fadeInRight">
                <p className="mb-30">
                Bedazzled, a family-run business, offers top-tier window, fascia, soffit and roof cleaning services across the North West. Utilizing advanced filtered technology and experienced in both traditional and water-fed techniques, we guarantee a streak-free finish at competitive prices, with free quotes available.
                </p>
                <ul className="check-style-one mb-40">
                  <li>
                    <i className="far fa-check" />
                    40+ years in customer services
                  </li>
                  <li>
                    <i className="far fa-check" />
                    IPAF Certified
                  </li>
                  <li>
                    <i className="far fa-check" />
                    DBS Cleared
                  </li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Book Your Sparkle Today</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about_bedazzled_1.png" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInDown">
                <img src="assets/images/about/about_bedazzled_2.png" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about_bedazzled_3.png" alt="About Image" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*====== About Wrapper ======*/}
              <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/about_bedazzled_blur.png)",
                        }}
                      />
                      <div className="icon">
                      <i class="fa fa-rocket" aria-hidden="true"></i>
                      </div>
                      <div className="text">
                        <h3 className="title">Our Mission</h3>
                        <p>
                         Our mission is to deliver unparalleled window cleaning services, ensuring customer satisfaction with streak-free finishes.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item item-active text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/about_bedazzled_blur.png)",
                        }}
                      />
                      <div className="icon">
                        <i className="fa fa-eye" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Vision</h3>
                        <p>
                        Ensuring every client's delight with pristine, streak-free windows and personalised service at competitive rates.
                        </p>
                        <Link legacyBehavior href="#testimonials">
                          <a className="btn-link">
                            See our Feedback
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/about_bedazzled_blur.png)",
                        }}
                      />
                      <div className="icon">
                      <i class="fa fa-building" aria-hidden="true"></i>
                      </div>
                      <div className="text">
                        <h3 className="title">Our Goal</h3>
                        <p>
                        As our company grows, we're employing more skilled staff, while continuously elevating our standards and using the latest cleaning technologies.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
    
      {/*====== Start Team Section ======*/}
      <section className="team-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="fa fa-tint" />
                  Team Members
                </span>
                <h2>Meet the BeDAZzled Experts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInLeft">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="fa fa-user" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      Daz - M
                    </Link>
                  </h3>
                  <p>Owner &amp; Senior Cleaner</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="fa fa-user" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Liam - R
                    </Link>
                  </h3>
                  <p>Senior Cleaner</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInRight">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="fa fa-user" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Reegan - M
                    </Link>
                  </h3>
                  <p>Junior Cleaner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/bedazzled_vans_with_logo.jpg)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="fa fa-tint" />
                    Need a Expert?
                  </span>
                  <h2 style={{color:'#0048a7'}}>Looking For a window cleaner that will go above and beyond?</h2>
                </div>
                <p style={{color:'#0048a7'}} className="mb-30">
                Experience unparalleled window cleaning with our streak-free finishes, where we consistently go above and beyond to ensure your utmost satisfaction.
                </p>
                <Link legacyBehavior href="/team">
                  <a style={{color:'#fff'}} className="main-btn golden-btn">Find Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
        <div className="container" id="testimonials">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="fa fa-tint" />
                  Testimonials
                </span>
                <h2>Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="speech marks"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/facebook_testimonial.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/facebook_testimonial.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/facebook_testimonial.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Brian L. Swinton</h6>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/facebook_testimonial.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Timothy V. Kim</h6>
                    <p className="position">SR Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
