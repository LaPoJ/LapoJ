## koa 中间件 MiddleWare
- `app.use(middleWare)`
- `next()` 表示下一个中间件
- 每一次 `use` 都会注册一个中间件 => `[middleWare1, middleWare2]` 

1. `async(func)`
2. 洋葱模型：一层一层往最里面执行，最后一个中间件；又从最后一个中间件往最外边冒泡执行剩余的代码
3. 解耦：每一个中间件负责一件事

 **以 *X*  开头的是 自定义响应头**

## Koa 第三方中间件

#### koa

- koa `ctx` 就是 `req + res` 组成的对象

  ```json
  ctx: {
    req: {},
    res: {}
  }
  ```

#### koa-views

- 第三方 扩展 `ctx` 接着往 `ctx` 上面塞东西

  ```json
  ctx: {
    req: {},
    res: {},
    render: () => {}
  }
  ```

  

## package.json

项目描述

依赖：

- npm -i 下来的文件

```json
"dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
```

`npm -i` 会生成 `node_modules` 目录; `koa`