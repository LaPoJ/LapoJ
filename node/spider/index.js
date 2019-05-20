const https = require('https')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const url = 'https://movie.douban.com/top250'
const imageDir = './math/'
const moviesDir = './doubanMoviesData/'
function doSpider(start) {
  https.get(url + `?start=${start}`, (res) => {
    // 接收数据
    let html = ''
    res.on('data', (chunk) => {
      html += chunk
    })
    // 结束
    res.on('end', () => {
      // console.log(html)
      const $ = cheerio.load(html)
      // li .item
      let movies = []
      $('.item').each(function () {
        // this 限制第一个参数的选择区域 li
        // 默认全局
        const picUrl = $('.pic img', this).attr('src')
        const title = $('.info .title', this).text()
        const star = $('.star .rating_num', this).text()
        const link = $('.hd a', this).attr('href')

        const movie = {
          title,
          star,
          link,
          picUrl
        }

        // 每一页的电影构成一个数组
        movies.push(movie)

        // 下载图片
        downloadImage(picUrl)
      })

      saveLocalData(start / 25, movies)
    })
  })
}


function saveLocalData(pageNum, movies) {
  fs.writeFile(moviesDir + `data${pageNum}.json`,
    JSON.stringify(movies),
    (err) => {
      if (!err) {
        // console.log('数据保存成功');
      }
    })
}

function downloadImage(picUrl) {
  https.get(picUrl, (res) => {
    res.setEncoding('binary')
    let data = ''
    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      const fileName = path.basename(picUrl)
      fs.writeFile(imageDir + fileName,
        data, 'binary', (err) => {
          if (!err) {
            // console.log(fileName, '保存成功');
          }
        })
    })
  })
}

const total = 250
let start = 0
while (start < total) {
  doSpider(start)
  start += 25
}
