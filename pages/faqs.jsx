import GaddenAccordion from "@/src/components/GaddenAccordion";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const faqsData1 = [
    {
      title: "Do you use tap water?",
      content: "Achieving optimal window cleaning results requires filtering water to a neutral pH of 7 using reverse osmosis and deionization processes. This purifies the water, removing minerals and contaminants, ensuring no streaks or residues are left on the glass, leading to a spotless, visually appealing finish on windows."
    },
    {
      title: "What areas do you cover",
      content: "We cover the entire North West of England, offering our services across the region to meet your needs with efficiency and reliability, ensuring accessibility and quality assistance wherever you are located."
    },
    // Add more items with content...
  ];

  const faqsData2 = [
    {
      title: "Can you clean my property tomorrow?",
      content: "Should you wish for your property to be cleaned, please contact us; we are committed to assisting in the most effective manner possible."
    },
    {
      title: "How much do you charge?",
      content: "Fixed prices aren't provided to ensure fairness; each quote is personalised to match the specific needs and scope of your project, preventing overcharging."
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <Layout header={3} footer={3}>
      <PageBanner pageName={"Faqs"} />
      <section className="faq-section pt-95">
        <div className="container">
          <Accordion defaultActiveKey="collapse0" className="accordion" id="accordionOne">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInLeft">
                  {faqsData1.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      content={faq.content}
                      key={i}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active === `collapse${i}`}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInRight ">
                  {faqsData2.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      content={faq.content}
                      key={i}
                      event={`collapseB${i}`}
                      onClick={() => setActive(`collapseB${i}`)}
                      active={active === `collapseB${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>
   
     
      {/*====== Start Partners Section ======*/}
      <div className="section-title text-center mb-50 wow fadeInDown">
               
      <h2 style={{ paddingTop: '70px' }}>Some of our customers</h2>
              </div>
      <Partners />
    </Layout>
  );
};
export default Faqs;
