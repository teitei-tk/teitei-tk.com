/* eslint-disable @typescript-eslint/camelcase */

// source code: https://github.com/zeit/next.js/tree/canary/examples/with-google-analytics
export const GA_TRACKING_ID = "UA-30698887-6";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
