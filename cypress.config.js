// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Your configuration options
    baseUrl: 'https://gertagjoni.github.io/Calculator/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
