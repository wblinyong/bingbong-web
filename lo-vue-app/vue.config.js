const path = require('path');

module.exports = {
  devServer: {
    port: 8086,
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    output: {
      library: "VueApp",
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_VueApp`,
    }
  }
}