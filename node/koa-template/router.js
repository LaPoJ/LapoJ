/**
 * 管理 router
 */
const Router = require('koa-router')
const router = new Router()

// user
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
// 文章
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

// user
router.get('/user', async (ctx) => {
  await ctx.render('user', { user })
})

// posts
router.get('/posts', async (ctx) => {
  const { id } = ctx.query
  const post = postsDetail
    .find( postItem => postItem.id == id)
  await ctx.render('post', { post })
})

router.get('/create', async (ctx) => {
  await ctx.render('create')
})

router.post('/create', async (ctx) => {
  console.log(ctx.request.body)
  const { title, content } = ctx.request.body
})

module.exports = router