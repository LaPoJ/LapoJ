const http = require('http')
const fs = require('fs')
const path = require('path')
const staticDir = './static/'

http.createServer ((request, response) => {
  // koa-static public
  // /static/a.png;  /static/b,png

  const reqUrl = request.url
  console.log(reqUrl)
  if (/^\/static\//.test(reqUrl)) {
    staticServer(request, response)
    return false
  }

  fs.readFile('./index1.html', 'binary', (err, file) =>{
    response.write(file, 'binary')
    response.end()
  })

}).listen(9090, () => {
  console.log('Server running at http://127.0.0.1:9090/')
})

function staticServer(req, res) {
  // /static/1.png
  let url = req.url
  const fileName = path.basename(url)
  const filePath = path.join(__dirname, staticDir, fileName)

  fs.exists(filePath, exists => {
    if (!exists) {
      res.end('404')
    }
    fs.readFile(filePath, 'binary', (err, file) => {
      if (err) {
        res.end(err)
      }
      res.write(file, 'binary')
      res.end()
    })
  })
}
