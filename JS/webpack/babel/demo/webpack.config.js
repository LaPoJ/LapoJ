const path = require("path")

// 导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtracTextPlugin = require('extract-text-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

module.exports ={

  mode: 'development',

  // 打包入口文件
  // entry: '/src/index.js',

  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    // 分模块 使用loader打理
    rules:[
      {
        test:/\.js$/,
        // exclude: /(node_modules)/,
        use: [{loader:"babel-loader"}]
      },
      {
        test: /\.less$/,
        use:['style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.png|jpg|gif$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ],

  },
  resolve:{
    extensions: [".js"],
    modules:[
      "node_modules",
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    htmlPlugin,
    new ExtracTextPlugin('[name].css')
  ],

}