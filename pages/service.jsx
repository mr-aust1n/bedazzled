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
        {/* Meta Description */}
        <meta
          name="description"
          content="Explore BeDazzled's commercial window cleaning services across Blackpool, Preston, Lytham St Annes, Poulton le Fylde and Lancashire. Professional solutions for offices, schools, hotels and managed properties."
        />

        {/* Page Title */}
        <title>
          Services | Commercial Window Cleaning Across Blackpool and Lancashire
          | BeDazzled
        </title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial Window Cleaning Services | BeDazzled Blackpool"
        />
        <meta
          property="og:description"
          content="Professional commercial window cleaning services for offices, hotels, schools and managed properties across Blackpool, Preston and Lancashire."
        />
        <meta
          property="og:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/cta-1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.bedazzledwcs.co.uk/services"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BeDazzled Commercial Services | Window Cleaning Blackpool"
        />
        <meta
          name="twitter:description"
          content="Explore our commercial window cleaning services across Blackpool and Lancashire. High quality, safe and reliable."
        />
        <meta
          name="twitter:image"
          content="https://www.bedazzledwcs.co.uk/assets/images/gallery/cta-1.jpg"
        />
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
