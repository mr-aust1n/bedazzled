export const GA_TRACKING_ID = "G-2KG9RNCQTG"; // your GA4 ID

// Send pageview
export const pageview = (url) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Send custom events
export const event = ({ action, params }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
};
