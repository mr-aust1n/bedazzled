import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-1.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        COMMERCIAL
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Window Cleaner
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/* <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More cleaners
                          </a>
                        </Link> */}
                        {<Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                          Contact Us!
                          </a>
                        </Link> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-2.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-left">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Window Cleaning
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Bringing a shine to the NorthWest!
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/* <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link> */}
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Contact Us!
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-3.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-right">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Bedazzled
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Commercial
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Window Cleaning for the North West
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/* <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link> */}
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Contact Us!
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Bedazzled Commercial Window Cleaning:
                </span>
                <h2> Your Sparkling Solution in the North West of England</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                Choose Bedazzled for unparalleled window cleaning services in the North West of England. Specialising in schools, offices, and showrooms. Exceptional quality and professionalism guaranteed. Contact us today for a free, no-obligation quote.
                </p>
                <Link legacyBehavior href="/service">
                  <a className="btn-link">
                    Learn More
                    <i className="far fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-6.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-landscape-1" />
                  </div>
                  <h5 className="title">Managed Properties</h5>
                  <p>Whether you own a single property or manage a portfolio, we've got you covered. With tailored service packages and flexible scheduling options, we provide unique needs and budget to your requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-watering-can" />
                  </div>
                  <h5 className="title">High Level Work </h5>
                  <p> IPAF trained to use both mobile boom and mobile vertical MEWP (Mobile elevated work platform). We can maintain the appearance of your property. Our services include gutter, roof and fascia cleaning. </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-lawnmower" />
                  </div>
                  <h5 className="title">Fascia and Gutter Cleaning</h5>
                  <p>Maintaining your property's appearance is vital for making lasting first impressions. Trust us to elevate your property's look through comprehensive, high-quality maintenance services tailored to your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-9.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-spider-plant" />
                  </div>
                  <h5 className="title">Schools, Offices &amp; Hotels</h5>
                  <p>Using only the very best Reach and Wash pole systems we offer window cleaning to a height of 70ft (21m). We only use purified water, so we ensure your premises are left gleaming" All our staff are DBS checked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">
        {/*====== About BG ======*/}
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      About Bedazzled
                    </span>
                    <h2>Why Choose Bedazzled</h2>
                  </div>
                  <p className="mb-45">
                    With over 6 years in business, our team of 4 offers specialised cleaning solutions. We're one of the few companies IPAF-certified and DBS-checked, trusted by a multitude of schools, offices, and showrooms across the North West. Get your free quote today.
                  </p>
                  <div className="about-inner-content d-flex justify-content-between">
                    <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          IPAF Trained
                        </li>
                        <li>
                          <i className="far fa-check" />
                          DBS Checked
                        </li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="main-btn primary-btn">Learn More!</a>
                      </Link>
                    </div>
                    <div className="experience-box-two">
                      <h2 className="number">
                        <Counter end={6} />+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
 
    
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section">
        <div className="container-fluid">
          {/*====== Testimonial Wrapper ======*/}
          <div className="testimonial-wrapper main-bg wow fadeInDown">
            <div className="shape shape-one">
              {/* <span>
                <img src="assets/images/testimonial/img-1.jpg" alt="image" />
              </span> */}
            </div>
            <div className="shape shape-two">
              <span>
                <img src="assets/images/testimonial/img-2.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-three">
              <span>
                <img src="assets/images/testimonial/img-3.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-four">
              <span>
                <img
                  src="assets/images/testimonial/tree.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="shape shape-five">
              <span>
                <img
                  src="assets/images/testimonial/tree2.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  {/*====== Testimonial Slider  ======*/}
                  <Slider
                    {...sliderProps.testimonialSliderTwo}
                    className="testimonial-slider-two"
                  >
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Five Stars All Around</h3>
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
                        They are professional, reliable, and genuinely committed to customer satisfaction.<br />
                        If you're in the North West and in need of a top-notch window cleaning service, look no further than Bedazzled!
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        {/* <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div> */}
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>10 out of 10</h3>
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
                      Well what to say ... Amazing... the customer service was fantastic... so friendly, polite and helpful. I didn’t realise that the deep clean would be so good. My facias, gutters, conservatory and cladding ALL look like new .. The job wasn’t easy but the end result .... WOW! they didn’t rush and made sure the job was done right. Impeccable work and service ... 10/10. Thank you soooo much Bedazzled window cleaning services .. 
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Yvonne-Charley Walsh</h6>
                          {/* <p className="position">CEO &amp; Founder</p> */}
                        </div>
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Thank you!!</h3>
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
                      Thank you for the fab recommendation Amanda, brilliant first clean of my windows, no hesitation in asking for a regular four week clean. Really impressed.
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Sarah Yates</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}

      {/*====== Start Blog Section  ======*/}
      {/* {<section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
             
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively and Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-4.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-4.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
             
              <div
                className="single-blog-post-two mb-40 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>High Contrast Mod Forceedy Colors Mode Custom</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-5.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-5.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
             
              <div
                className="single-blog-post-two mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Enough Requirements For Accessible Components</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-6.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-6.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> } */}
      {/*====== End Blog Section  ======*/}

  {/*====== Customers Section  ======*/}
      {<section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
             
                <h2>Some Of Our Customers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
        
          </div>
        </div>
      </section> }
      
  {/*====== Customers Section  ======*/}

      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index3;
