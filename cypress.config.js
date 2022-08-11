const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://www.mrandmrssmith.com/'
  },
  retries: {
    runMode: 0,
  },
  projectId: 'a5zbka',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature',
  },
})
