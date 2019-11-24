const Koa = require('koa')
const fs = require('fs')
const app  = new Koa()

app.use(async(ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})

async function route(url) {
  let page = '404.html'
  switch (url) {
    case '/':
      page = 'index.html'
      break;
    case '/index':
      page = 'index.html'
      break;
    case '/todo':
      page = 'todo.html'
      break;
    case '/404':
      page = '404.html'
      break;
    default:
      break;
  }
  let html = await render(page)
  return html
}

async function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./pages/${page}`
    fs.readFile(pageUrl, "binary", (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

app.listen(3002, () => {
  console.log('[demo] is running at http://localhost:3002')
})