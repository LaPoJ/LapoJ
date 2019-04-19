// 传统的MVC后端开发
//   MVVM
//   Model Page({data:{}})
//   View Template wxxml
//   VM {{}} -> wx:for wx:for-item

/**
 * MVC -> 经典后端开发模式
 * model 数据库
 * V View 静态页面
 * C Controller
 * 先做Web HTTP服务器
 * 端口
 * MySql 3306
 * WebServer 80/8080/3000
 *
 * 用户：Request -> IP + 端口
 * Web Server Response
 *
 * http
 *   .createServer(function(req, resp){
 *     //request 用户*n
 *     //response
 *    })
 *   .listen(8080)
 *
 */


// require 进来 COMMONJS 模块化方案
const http = require('http');
const https = require('https');
let i = 0;
http.createServer(function(req, res){
  i++;
  res.end(`Hello World! ${i}`);

}).listen(3000);

// web服务 在软件上理解就是一个HTTP访问服务
