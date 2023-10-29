import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Team = () => {
  return (
    <Layout>
      <PageBanner pageName={"Meet Bedazzled"} />
     
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/page-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert - Look no Further!
                  </span>
                  {/* <h2>Looking For a Garden Specialist</h2> */}
                </div>
                <p className="mb-30">
                Bedazzled is a top-tier commercial window cleaning enterprise with over 40 years' experience. Specialising in servicing showrooms, schools, and hotels across the Fylde Coast and beyond, we utilise the latest window cleaning technology and advanced filtered water systems. Our expert team meets diverse property needs with competitive pricing, comprehensive public liability insurance, and free quotes available.
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="main-btn golden-btn">Get a Quote</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Team Section  ======*/}
      <section className="team-section pt-125 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
              <h2>Some of Our Clients</h2>
              </div>
            </div>
          </div>        
          <div className="row">
            <div className="col-lg-12">
              {/*====== Single Team Item ======*/}
              <div className="team-button text-center wow fadeInDown">
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default Team;
