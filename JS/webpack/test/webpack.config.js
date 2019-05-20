// 打包流程

/**
 * 如果没有这个文件，默认配置
 * src/ 开发目录
 * dist/ 打包出口默认目录
 * src/index.js 打包入口文件
 */

const path = require('path')
module.exports = {

  // 入口文件
  entry: './src/index',

  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    // babel -> stylus/sass/less -> 静态资源

    // babel
    rules:[
      {
        test: /\.js$/,
        include:[
          path.resolve(__dirname, 'src')
        ],
        use: "babel-loader"
      },{

      }
    ]
  },

  resolve: {
    extensions: ['.js']
  }
}