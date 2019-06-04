const path = require('path')
const Koa = require('koa')
// 支持哪些 模板
const views = require('koa-views')
const ejs = require('ejs')
const app = new Koa()

const user = {
  name: '猛哥',
  age: '18',
  gender: '男',
  posts: [
    {
      title: '小程序采坑指哪踩哪',
      id: 0
    },
    {
      title: '小程序采坑',
      id: 1
    }
  ]
}

const postsDetail = [
  {
    id: 0,
    content: 'wechat app'
  },
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]

app.use(
  views(path.join(__dirname, './views'),{
    extension: 'ejs'
  })
)

// /user -> 个人主页面
// /posts -> 文章详情
app.use(async (ctx) => {
  // 页面区分
  if (ctx.path === '/user') {
    await ctx.render('user', { user })
  }else if (ctx.path === '/posts') {
    const { id } = ctx.query
    const post = postsDetail.find( postItem => postItem.id == id)
    await ctx.render('post', { post })
  }else{

    ctx.body = `无法处理该请求`
  }
})

app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})