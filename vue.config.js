const path = require('path')
module.exports = {
  publicPath: './',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  // 引入全局SCSS变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/color.scss";`
      }
    }
  }
}