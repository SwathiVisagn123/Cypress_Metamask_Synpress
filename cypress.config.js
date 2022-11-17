const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: true,
  e2e: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
    },
    baseUrl: "https://google.co.uk ",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalSessionAndOrigin: true,
    supportFile: "cypress/support/e2e.js",
  },
});
