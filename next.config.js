/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Fix duplicate homepage
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },

      // Fix FAQ typo
      {
        source: "/faq",
        destination: "/faqs",
        permanent: true,
      },

      // Fix old service page
      {
        source: "/service",
        destination: "/commercial-cleaning-services",
        permanent: true,
      },

      // Fix old team page
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
