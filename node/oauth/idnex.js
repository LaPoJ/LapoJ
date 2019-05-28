const path = require('path')
const Koa = require('koa')  //node 开发框架~
const axios = require('axios')

// public 让用户访问
// 路由 网站是提供资源的,

// 静态资源  动态资源(数据库)
const server = require('koa-static')
const route = require('koa-route')
const main = server(path.join(__dirname, '/public'))

const clientID = '1d544fee1b66b59be2c2'
const clientSecret = 'bd712075a53a15106bff75c9c797e3a15344d25d'


// 从前端思维 切换到后端思维
const oauth = async ctx => {
  // 可以 await 数据库
  // console.log(ctx.request)
  console.log('code:' + ctx.request.query.code)
  // const str = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('等了三秒钟')
  //   }, 3000);
  // })

  // console.log(str)
  // code => token

  const requestToken = ctx.request.query.code
  const token_url = 'https://github.com/login/oauth/access_token?' + `client_id=${clientID}&` + `client_secret=${clientSecret}&` + `code=${requestToken}`

  console.log(token_url)
  const tokenResponse = await axios({
    method: 'post',
    url: token_url,
    headers:{
      accept: 'application/json'
    }
  })

  const accessToken = tokenResponse.data.access_token
  console.log(accessToken)

  const result = await axios({
    method: 'get',
    url: 'https://api.github.com/user',
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`

    }
  })

  const avatar_url = result.data.avatar_url
  ctx.response.redirect(`/welcome.html?avatar_url=${avatar_url}`)


  // ctx.response.redirect('/welcome.html')
}

const app = new Koa()
app.use(main)
app.use(route.get('/oauth/redirect', oauth))
app.listen(8080)