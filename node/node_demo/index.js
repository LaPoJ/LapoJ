const Koa = require('koa')
const app = new Koa()

app.use( async(ctx) => {
  ctx.body = 'Hello LP'
})

app.listen(3000,() => {
  console.log('[demo] is running http://localhost:3000')
})