const path = require("path")

// 导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const MCEP = new MiniCssExtractPlugin({

  filename: '[name].css',
  chunkFilename: '[id].css',
})

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

module.exports ={

  // 打包入口文件
  entry: './src/index.js',

  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  mode: 'development',

  module: {
    // 分模块 使用loader打理
    rules:[
      {
        test:/\.js$/,
        // exclude: /(node_modules)/,
        use:{
            loader:"babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader,"style-loader", "css-loader", "less-loader"]
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
    extensions: ['.js']
    // modules:[
    //   "node_modules",
    //   path.resolve(__dirname, 'src')
    // ]
  },
  plugins: [
    htmlPlugin,
    MCEP
  ],

}