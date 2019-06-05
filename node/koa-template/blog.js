const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const ejs = require('ejs')
const koaBody = require('koa-body')

const router = require('./router')
const app = new Koa()

app.use(koaBody())
app.use(
  views(path.join(__dirname, './views'),{
    extension: 'ejs'
  })
)

// /user -> 个人主页面
// /posts -> 文章详情

// router.get('/user', )
// router.get('/posts', )

// app.use(async (ctx) => {
//   // 页面区分
//   if (ctx.path === '/user') {
//     await ctx.render('user', { user })
//   }else if (ctx.path === '/posts') {
//     const { id } = ctx.query
//     const post = postsDetail.find( postItem => postItem.id == id)
//     await ctx.render('post', { post })
//   }else{
//     ctx.body = `无法处理该请求`
//   }
// })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})