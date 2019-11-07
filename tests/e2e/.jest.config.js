// Jest configuration specific to the E2E tests
// (separated from regular jest.config.js used for unit tests)
// See https://jestjs.io/docs/en/configuration for more information about these options
module.exports = {
  setupFilesAfterEnv: ['./.jest.setup.js'],
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['js'],
  testMatch: ['**/tests/e2e/**/*.spec.(js|ts)'],
  watchPlugins: [],
  reporters: ['default', 'jest-screenshot/reporter'],
}
