## HTTP 协议

####　状态码

> `HTTP` 响应 (`response`)中包含状态码

- `1XX`：请求正在处理
- `2XX`：请求已经成功处理
  - 200：客户端请求服务端成功后的状态
- `3XX`：重定向 `Location`
- `4XX`：客户端错误
  - 404：not found
- `5XX`：服务端错误

浏览器打理(`proxy`)

##### 常见状态码

301： 永久跳转

> 用户 www.xiaomi.com, www.mi.com
> 告诉蜘蛛  www.xiaomi.com/a.html  废弃，把记录更新掉