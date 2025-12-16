/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bedazzledwcs.co.uk",
  generateRobotsTxt: true,
  sitemapSize: 45000,
  changefreq: "weekly",
  priority: 0.7,

  exclude: [
    "/api/*",
    "/_next/*",
    "/server-sitemap.xml",
    "/project-*",
    "/*backup*",
  ],

  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,

      "/commercial-window-cleaning": 0.95,
      "/commercial-window-cleaning-blackpool": 0.95,
      "/commercial-window-cleaning-lancashire": 0.9,

      "/high-level-window-cleaning": 0.85,
      "/high-level-window-cleaning-blackpool": 0.85,

      "/gutter-and-fascia-cleaning": 0.85,
      "/gutter-cleaning-blackpool": 0.85,

      "/managed-property-cleaning": 0.85,

      "/about": 0.7,
      "/contact": 0.7,
      "/reviews": 0.6,
      "/faqs": 0.6,
    };

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: "weekly",
      priority: priorityMap[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async (config) => {
    const base = config.siteUrl;

    const urls = [
      "/",
      "/about",
      "/contact",
      "/faqs",
      "/reviews",

      "/commercial-window-cleaning",
      "/high-level-window-cleaning",
      "/gutter-and-fascia-cleaning",
      "/managed-property-cleaning",

      "/commercial-window-cleaning-blackpool",
      "/commercial-window-cleaning-lancashire",
      "/high-level-window-cleaning-blackpool",
      "/gutter-cleaning-blackpool",
    ];

    return urls.map((p) => ({
      loc: `${base}${p}`,
      changefreq: "weekly",
      priority: [
        "/",
        "/commercial-window-cleaning",
        "/commercial-window-cleaning-blackpool",
      ].includes(p)
        ? 0.95
        : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/server-sitemap.xml"],
      },
    ],
    host: "https://www.bedazzledwcs.co.uk",
  },
};
