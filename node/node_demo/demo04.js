const koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new koa()

app.use(bodyparser())

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 显示表单页面
    let html = `
      <h1>Koa2 request POST</h1>
        <form action="/" method="POST">
          <p>userName</p>
          <input name="userName" /> <br />
          <p>age</p>
          <input name="age" /> <br />
          <p>webSite</p>
          <input name="webSite" /> <br />
          <button type="submit" >提交</button>
        </form>
      `
      ctx.body = html

  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    ctx.body = `<h1>404</h1>`
  }
})

app.listen(3000, () => {
  console.log('[demo] is running at http://localhost:3000')
})