import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);
const ProjectGrid = () => {
  return (
    <Layout header={3} footer={3}>
      <Head>
        <title>Commercial Cleaning Services Blackpool | BeDAZzled</title>

        <meta
          name="description"
          content="Commercial cleaning services in Blackpool for offices, schools, hotels and managed properties. Reliable, professional cleaning by BeDAZzled."
        />

        <link
          rel="canonical"
          href="https://www.bedazzledwcs.co.uk/commercial-cleaning-services"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Cleaning Services Blackpool | BeDAZzled"
        />
        <meta
          property="og:description"
          content="Professional commercial cleaning services in Blackpool for offices, schools, hotels and managed properties."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/cta-1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/commercial-cleaning-services"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageBanner
        pageName={
          "Services - Commercial Window Cleaning Across Blackpool and Lancashire for Offices, Shops and Commercial Sites"
        }
      />

      {/*====== Start Gallery section ======*/}
      <ProjectGridIsotope />
      {/*====== End Gallery section ======*/}
      <Partners />
    </Layout>
  );
};
export default ProjectGrid;
