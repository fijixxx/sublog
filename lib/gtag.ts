export const GA_TRACKING_ID = process.env.NODE_ENV == "production" ? "G-9LBVWQSG1Q" : ""

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};