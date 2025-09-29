/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bedazzledwcs.co.uk",
  generateRobotsTxt: true,
  sitemapSize: 45000,
  changefreq: "weekly",
  priority: 0.7,

  // Exclude only system/demo routes
  exclude: [
    "/api/*",
    "/_next/*",
    "/server-sitemap.xml",
    "/service-details",
    "/project-grid-2-column",
    "/project-details",
    "/serviceBackup",
  ],

  // Custom priorities per route
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/about": 0.8,
      "/service": 0.9,
      "/managed-properties": 0.8,
      "/ipaf-cleans": 0.8,
      "/gutters-fascias": 0.8,
      "/commercial-cleaning": 0.9,
      "/contact": 0.7,
      "/faqs": 0.6,
      "/team": 0.6,
    };

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: "weekly",
      priority: priorityMap[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  // Force inclusion of your required pages
  additionalPaths: async (config) => {
    const base = config.siteUrl;
    const urls = [
      "/",
      "about",
      "service",
      "managed-properties",
      "ipaf-cleans",
      "gutters-fascias",
      "commercial-cleaning",
      "contact",
      "faqs",
      "team",
    ];
    return urls.map((p) => ({
      loc: `${base}/${p}`.replace(/\/+$/, "/"),
      changefreq: "weekly",
      priority: ["/", "service", "commercial-cleaning"].some(
        (k) => `/${p}` === `/${k}`
      )
        ? 0.9
        : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/server-sitemap.xml"], // block system routes
      },
    ],
    additionalSitemaps: ["https://www.bedazzledwcs.co.uk/sitemap.xml"],
    host: "https://www.bedazzledwcs.co.uk",
  },
};
