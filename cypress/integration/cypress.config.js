const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c33wva',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
