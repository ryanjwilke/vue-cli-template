const path = require('path')

module.exports = {
  configureWebpack: () => {
    return {
      resolve: {
        extensions: ['.svg', '.vue', '.js'],
        alias: {
          '@img': path.resolve(__dirname, 'src/assets/img'),
          '@icon': path.resolve(__dirname, 'src/assets/icon'),
        },
      },
      performance: {
        hints: 'warning',
        maxAssetSize: 250000,
        maxEntrypointSize: 380000,
        assetFilter: (filename) => {
          return filename.endsWith('.js')
        },
      },
    }
  },

  chainWebpack: (config) => {
    // Improve the "yarn build" output so it doesn't cause test failures.
    // Config options here: https://github.com/kangax/html-minifier
    config.plugin('html').tap((args) => {
      args[0].minify = {
        removeComments: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        removeScriptTypeAttributes: true,
      }
      return args
    })

    // Configure the Vue SVG Loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')

    // Configure the JS Yaml Loader
    config.module
      .rule('js-yaml-loader')
      .test(/\.yml$/)
      .use('js-yaml-loader')
      .loader('js-yaml-loader')
      .end()
  },
}
