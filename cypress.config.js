const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ydwveq',
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
