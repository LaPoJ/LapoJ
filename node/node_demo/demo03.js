const koa = require('koa')
const app = new koa()

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
    let postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
    ctx.body = `<h1>404</h1>`
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try{
      let postData = ''
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.on('end', function () {
        let parseData = parseQueryString(postData)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

function parseQueryString(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  console.log(queryStrList.entries())
  for(let [index, queryStr] of queryStrList.entries()){
    let itemList = queryStr.split('=')
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}

app.listen(3001, () => {
  console.log('[demo] is running at http://localhost:3001')
})