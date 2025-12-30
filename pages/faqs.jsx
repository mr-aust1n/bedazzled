import GaddenAccordion from "@/src/components/GaddenAccordion";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Head from "next/head";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const faqsData1 = [
    {
      title: "Do you use tap water?",
      content:
        "No. We use purified water filtered through reverse osmosis and deionisation systems. This removes minerals and impurities, allowing windows to dry spotless with no streaks or residue.",
    },
    {
      title: "What areas do you cover?",
      content:
        "WWe provide commercial window cleaning across Blackpool and the wider Lancashire area. This includes Preston, Lytham St Annes, Poulton-le-Fylde, Fleetwood, Thornton-Cleveleys, Bispham, Kirkham, and surrounding towns and business parks. We regularly work with offices, schools, hotels, retail units, and managed properties throughout the region and can travel further for larger commercial contracts.",
    },
    {
      title: "Do you offer commercial window cleaning contracts?",
      content:
        "Yes. We offer regular commercial cleaning contracts tailored to your site, including weekly, fortnightly, monthly, or bespoke schedules depending on access and usage.",
    },
    {
      title: "Are you insured and qualified?",
      content:
        "Yes. We are fully insured and trained. Our team is IPAF certified for high level access work and DBS checked where required for schools and sensitive sites.",
    },
    {
      title: "Can you clean windows at height?",
      content:
        "Yes. We specialise in high level window cleaning using IPAF approved equipment including MEWPs and cherry pickers for multi storey and difficult access buildings.",
    },
  ];

  const faqsData2 = [
    {
      title: "Can you clean my property tomorrow?",
      content:
        "We aim to accommodate urgent requests where possible. Availability depends on access requirements and location, so contact us and we will advise the soonest option.",
    },
    {
      title: "How much does commercial window cleaning cost?",
      content:
        "Pricing depends on building size, access, frequency, and height. We provide clear, competitive quotes following a site assessment so you only pay for what you need.",
    },
    {
      title: "Do you clean managed properties and apartment blocks?",
      content:
        "Yes. We work with managing agents, landlords, and housing providers to maintain communal areas, apartment blocks, and residential developments.",
    },
    {
      title: "Will cleaning disrupt our business?",
      content:
        "No. We plan cleans around your operating hours wherever possible and work efficiently to minimise disruption to staff, customers, and residents.",
    },
    {
      title: "How often should commercial windows be cleaned?",
      content:
        "Most commercial properties benefit from monthly or quarterly cleaning. High footfall sites such as retail or hospitality may require more frequent visits.",
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>FAQs | Commercial Window Cleaning Blackpool</title>

        <meta
          name="description"
          content="Frequently asked questions about commercial window cleaning in Blackpool. Learn about pricing, safety, methods and how BeDAZzled works."
        />

        <link rel="canonical" href="https://www.bedazzledwcs.co.uk/faqs" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="FAQs | Commercial Window Cleaning Blackpool"
        />
        <meta
          property="og:description"
          content="Answers to common questions about BeDAZzled commercial window cleaning services in Blackpool."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/bg/page-bg-1.jpg"
        />
        <meta property="og:url" content="https://www.bedazzledwcs.co.uk/faqs" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageBanner pageName={"FAQs"} />

      <section className="faq-section pt-95">
        <div className="container">
          <Accordion
            defaultActiveKey="collapse0"
            className="accordion"
            id="accordionOne"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInLeft">
                  {faqsData1.map((faq, i) => (
                    <GaddenAccordion
                      key={i}
                      title={faq.title}
                      content={faq.content}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active === `collapse${i}`}
                    />
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInRight">
                  {faqsData2.map((faq, i) => (
                    <GaddenAccordion
                      key={i}
                      title={faq.title}
                      content={faq.content}
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

      <div className="section-title text-center mb-50 wow fadeInDown">
        <h2 style={{ paddingTop: "70px" }}>Some of our customers</h2>
      </div>

      <Partners />
    </Layout>
  );
};

export default Faqs;
