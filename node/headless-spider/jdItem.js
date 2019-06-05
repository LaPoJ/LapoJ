const puppeteer = require('puppeteer')
const fs = require('fs')

const urls = [
  "https://item.jd.com/5018424.html",
      "https://item.jd.com/10247830981.html",
      "https://item.jd.com/3334376.html",
      "https://item.jd.com/2349418.html",
      "https://item.jd.com/6746268.html",
      "https://item.jd.com/10072865662.html",
      "https://item.jd.com/4856431.html",
      "https://item.jd.com/100001610254.html",
      "https://item.jd.com/1670651.html",
      "https://item.jd.com/5185727.html",
      "https://item.jd.com/100001070973.html",
      "https://item.jd.com/100002689575.html",
      "https://item.jd.com/100002932383.html",
      "https://item.jd.com/27820297186.html",
      "https://item.jd.com/3785372.html",
      "https://item.jd.com/15611748420.html",
      "https://item.jd.com/2223524.html",
      "https://item.jd.com/33064445976.html",
      "https://item.jd.com/4140686.html",
      "https://item.jd.com/1890477.html",
      "https://item.jd.com/100002267682.html",
      "https://item.jd.com/10851461706.html",
      "https://item.jd.com/100000197679.html",
      "https://item.jd.com/3126050.html",
      "https://item.jd.com/4383524.html",
      "https://item.jd.com/4007206.html",
      "https://item.jd.com/100002512743.html",
      "https://item.jd.com/3009237.html",
      "https://item.jd.com/7800652.html",
      "https://item.jd.com/7385239.html",
      "https://item.jd.com/47264810277.html",
      "https://item.jd.com/1282470102.html",
      "https://item.jd.com/4961892.html",
      "https://item.jd.com/43257268530.html",
      "https://item.jd.com/1194864.html",
      "https://item.jd.com/21786788588.html",
      "https://item.jd.com/2283502.html",
      "https://item.jd.com/100001044017.html",
      "https://item.jd.com/1670620.html",
      "https://item.jd.com/3126016.html",
      "https://item.jd.com/34882664985.html",
      "https://item.jd.com/5405836.html",
      "https://item.jd.com/100003838630.html",
      "https://item.jd.com/1125629.html",
      "https://item.jd.com/4057300.html",
      "https://item.jd.com/18678056854.html",
      "https://item.jd.com/100004573622.html",
      "https://item.jd.com/5292893.html",
      "https://item.jd.com/10357260715.html",
      "https://item.jd.com/7398430.html",
      "https://item.jd.com/12394299342.html",
      "https://item.jd.com/28894374475.html",
      "https://item.jd.com/8526638.html",
      "https://item.jd.com/1125638.html",
      "https://item.jd.com/100002105257.html",
      "https://item.jd.com/3339991.html",
      "https://item.jd.com/3877454.html",
      "https://item.jd.com/3576275.html",
      "https://item.jd.com/4612240.html",
      "https://item.jd.com/4682569.html"
]

const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, time);
})

async function getMaskItem(url) {
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage()
  page.setViewport({
    width: 1440,
    height: 900
  })


  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  sleep(1000)

  const data = await page.evaluate(() => {
    let masks = {}
    const skuName = document.querySelector('.sku-name')
    const price = document.querySelector('.price')
    const parameterArr = document.querySelectorAll('.p-parameter-list li')
    const newParaArr = Array.from(parameterArr)
    const desc = newParaArr.map(parament => {
      return parament.innerText
    })

    const mask = {
      skuName: skuName.innerText,
      price: price.innerText,
      desc: desc
    }
    // masks.push(mask)
    return mask
  })

  console.log(data)

  browser.close()
  return data
}

async function getMaskResult(){
  const masks = []
  for (let i = 0; i < urls.length; i++) {
    const mask = await getMaskItem(urls[i])
    masks.push(mask)
  }
  fs.writeFile('maskDesc.json', JSON.stringify(masks), (err) => {

  })
}

getMaskResult()
