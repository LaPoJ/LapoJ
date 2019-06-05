const puppeteer = require('puppeteer')
const fs = require('fs')

const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, time);
})


async function getMasks(onPage){
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage()
  page.setViewport({
    width: 1440,
    height: 900
  })


  await page.goto(`https://search.jd.com/Search?keyword=%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&suggest=2.his.0.0&stock=1&page=${onPage}`, {
    waitUntil: 'networkidle2'
  })

  sleep(1000)
  await autoScroll(page)
  const data = await page.evaluate(() => {
    const masks = document.querySelectorAll('.gl-item .p-name a')
    const masksArray = Array.from(masks)
    const hrefs = masksArray.map(href => {
      return href.href
    })
    return {
      hrefs
    }
  })
  browser.close()
  return data
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0
      let distance = 100
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if(totalHeight >= scrollHeight){
              clearInterval(timer);
              resolve();
          }
      }, 100)
    })
  })
}


async function writeHref() {
  const allHrefs = []
  for (let i = 0; i < 50; i+=2) {
    const hrefArr = await getMasks(i)
    console.log(hrefArr)
    allHrefs.push(hrefArr)
    sleep(5000)
  }
  fs.writeFile('hrefs.json', JSON.stringify(allHrefs), (err) => {

  })
}

writeHref()
