const Koa = require('koa')

const app = new Koa()
const admin = new Koa()


// http.createServer -> req -> res
// context -> req + res

// 1
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})

// 2
app.use(async (ctx, next) => {
  console.log(4)
  await next()
})

// 3
app.use(async (ctx) => {
  ctx.body = `<strong>tj np</strong>`
  console.log(3)
})

// http.listen 语法糖
app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})