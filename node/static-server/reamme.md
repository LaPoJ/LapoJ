## static

- `koa-static`

  为什么要配置？

  1. 静态资源：图片 `HTML`、 `CSS`、 ` js`
  2. 不会随着服务运行改变的内容

- assets => 静态资源



## path

- `path.jion()` 将路径的各个部分连接起来 处理了各个平台的分隔符
- `windows` : \
- `类unix`: /



## formidable

- `fields`  非`[type="file"]`内容存到该字段
- `files` `[type="file"]`文件存到该字段



## 静态资源服务

- 双击打开：`file://xxxx` 本地文件传输协议

- 服务器：http://localhost:9090/ 	访问图片时 发送了一个请求

- 处理 static 目录下的资源，映射为请求路径

- `/static/1.png` 返回 `1.png`的内容

- `/static/2.png` 返回 `2.png`的内容

- `koa-static`

  ##### 业内成熟的静态资源服务器

  >`Nginx`



## 图片资源处理

> `html `里面引入的图片、`js`、`css`都会发送一个请求，这些都是静态资源，所以 `url ` 和 `服务器磁盘路径` 是一一对应的：
>
> 1. 有 `index.html` 的时候 自动打开文件 `/` 自己加上 `index.html`
> 2. 没有列出所有文件、文件夹; `fs.readDir()` 获取改文件夹下的所有文件
> 3. 用 `koa-static` 的作用就是在 `html` 里面正确引入图片地址

