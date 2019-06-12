const puppeteer = require('puppeteer')
const fs = require('fs')

const urls = [
  "http://item.jumei.com/df19052910108951p4410424.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_1",
  "http://item.jumei.com/4774602.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_2",
  "http://item.jumei.com/4838608.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_3",
  "http://item.jumei.com/df19060310149023p4729894.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_4",
  "http://item.jumei.com/4874010.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_5",
  "http://item.jumei.com/4838280.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_6",
  "http://item.jumei.com/4882582.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_7",
  "http://item.jumei.com/4884932.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_8",
  "http://item.jumei.com/4882580.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_9",
  "http://item.jumei.com/4884896.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_10",
  "http://item.jumei.com/4882448.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_11",
  "http://item.jumei.com/4838370.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_12",
  "http://item.jumei.com/4913884.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_14",
  "http://item.jumei.com/df19060510175775p4884974.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_15",
  "http://item.jumei.com/4753626.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_16",
  "http://item.jumei.com/4753628.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_17"
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
  page.setViewport({ width: 1440, height: 900 })

  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  sleep(1000)

  // 面膜价格
  const priceEle = await page.$('.pop_price')
  const price = await priceEle.$eval('.price_now', m => m.innerText.replace(/\s+/g, ''))

  // console.log(price)

  // 图片
  const imgUrlEle = await page.$('.ac_container ul li')
  const imgUrl = await imgUrlEle.$eval('img', img => img.src)

  // console.log(imgUrl)

  const popDetail = await page.$('.pop_detail_top')
  const titleDesc = await popDetail.$eval('.pop_detail_tit', desc => desc.innerText)
  // console.log(titleDesc)

  // 商品信息
  const descMainEle = await page.$('.main_detail')
  const desc = await descMainEle.$$eval('.deal_specs table tbody tr', descs => {
    return descs.map(desc => {
      return desc.innerText.replace(/\u0009/g, '')
    })
  })
  // 面膜名称
  const newName = desc[0].split('：')
  const mask = {
    pName: newName[newName.length - 1],
    price,
    imgUrl,
    desc: titleDesc,
    pInfo: desc
  }

  browser.close()
  return mask
}


async function getMaskResult(){
  const masks = []
  for (let i = 0; i < urls.length; i++) {
    const mask = await getMaskItem(urls[i])
    masks.push(mask)
  }
  fs.writeFile('jmMasks.json', JSON.stringify(masks), (err) => {

  })
}

getMaskResult()
