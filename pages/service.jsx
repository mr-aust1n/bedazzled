import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";

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
          content="Explore BeDazzled’s commercial window cleaning services across Blackpool, Preston, Lytham St Annes and Lancashire. From IPAF high-level cleans to managed properties, offices, hotels, gutters and fascias, we provide reliable and professional solutions for businesses."
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
          content="View our full range of commercial window cleaning services including IPAF high-level cleans, managed properties, gutters and fascias, and office and hospitality cleans across Blackpool and Lancashire."
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
          content="BeDazzled Commercial Cleaning Services | Blackpool and Lancashire"
        />
        <meta
          name="twitter:description"
          content="Explore our commercial window cleaning services including high-level IPAF cleans, managed properties and more across Blackpool and Lancashire."
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
