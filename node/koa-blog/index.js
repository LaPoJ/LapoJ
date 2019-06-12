const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const koaStatic = require('koa-static')

const app = new Koa()

const { PORT } = require('./config/default.js')
const signinRouter = require('./routers/signin.js')

app.use(koaStatic(path.join(__dirname, './public')))

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(signinRouter.routes())

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`)
})