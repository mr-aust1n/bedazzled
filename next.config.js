/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Duplicate / index variants
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-3",
        destination: "/",
        permanent: true,
      },

      // FAQ typo
      {
        source: "/faq",
        destination: "/faqs",
        permanent: true,
      },

      // Old / invalid service pages
      {
        source: "/service",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },
      {
        source: "/service-details",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },
      {
        source: "/serviceBackup",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },

      // Old managed properties naming
      {
        source: "/managed-properties",
        destination: "/managed-property-cleaning",
        permanent: true,
      },

      // Old IPAF naming
      {
        source: "/ipaf-cleans",
        destination: "/high-level-window-cleaning",
        permanent: true,
      },

      // Old testimonials page
      {
        source: "/testimonials",
        destination: "/reviews",
        permanent: true,
      },

      // Old team page
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },

      // Old project and template pages
      {
        source: "/project-details",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },
      {
        source: "/product-details",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },
      {
        source: "/project-grid-2-column",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },

      // Old blog template
      {
        source: "/blog-standard",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
