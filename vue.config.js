module.exports = {
  chainWebpack: (config) => {
    // Improve the "yarn build" output so it doesn't cause test failures.
    config.plugin('html').tap((args) => {
      args[0].minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        removeScriptTypeAttributes: false,
      }
      return args
    })
  },
}
