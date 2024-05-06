const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "ix7i8j",
  defaultCommandTimeout: 10000,
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  reporter: 'cypress-mochawesome-reporter',
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/examples/*/*.js"
  },
});
