const puppeteer = require('puppeteer')
const fs = require('fs')

const urls = [
  "http://item.jumei.com/3845602.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_13",
      "http://item.jumei.com/3216740.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_18",
      "http://item.jumei.com/3216736.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_19",
      "http://item.jumei.com/3417172.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_20",
      "http://item.jumei.com/3140634.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_22",
      "http://item.jumei.com/2995118.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_23",
      "http://item.jumei.com/3118191.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_24",
      "http://item.jumei.com/3118198.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_25",
      "http://item.jumei.com/3846628.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_26",
      "http://item.jumei.com/3216748.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_27",
      "http://item.jumei.com/4719276.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_28",
      "http://item.jumei.com/57441.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_29",
      "http://item.jumei.com/3763224.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_31",
      "http://item.jumei.com/3763226.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_32",
      "http://item.jumei.com/1319665.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_33",
      "http://item.jumei.com/3442888.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_34",
      "http://item.jumei.com/3963524.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_35",
      "http://item.jumei.com/4405186.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_1_36",
      "http://item.jumei.com/3763226.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_1",
      "http://item.jumei.com/1319665.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_2",
      "http://item.jumei.com/4405184.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_3",
      "http://item.jumei.com/4405186.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_4",
      "http://item.jumei.com/4380638.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_5",
      "http://item.jumei.com/3879978.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_6",
      "http://item.jumei.com/2843157.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_8",
      "http://item.jumei.com/4255620.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_9",
      "http://item.jumei.com/4294206.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_10",
      "http://item.jumei.com/3448292.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_11",
      "http://item.jumei.com/4390648.html?from=sr_%E7%94%B7%E5%A3%AB%E9%9D%A2%E8%86%9C_2_12"
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
  await autoScroll(page)

  // 面膜价格
  const priceEle = await page.$('.mall_price_detail')
  const price = await priceEle.$eval('.price_num', m => m.innerText)

  // 图片
  const imgUrlEle = await page.$('.jqzoom')
  const imgUrl = await imgUrlEle.$eval('img', img => img.src)


  // 商品描述
  const descMainEle = await page.$('.slidebar_pro_cn')
  const titleDesc = await descMainEle.$$eval('.shopping_parameter .mall_detail_des .mar_t15', descs => {
    return descs.map(desc => {
      return desc.innerText
    })
  })
  // 面膜信息
  const desc = await descMainEle.$$eval('.shopping_parameter .parameter_table tbody tr', descs => {
    return descs.map(desc => {
      return desc.innerText.replace(/[\：]/, '').replace(/[\u0009]/, '：').replace(/[\u0009\u000A\s+]/g, '')
    })
  })
  // 面膜名称
  const newName = desc[0].split('：')
  const mask = {
    pName: newName[newName.length - 1].replace(/\s+/g, ''),
    price,
    imgUrl,
    desc: titleDesc[0],
    pInfo: desc
  }

  browser.close()
  return mask
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
          if(totalHeight >= scrollHeight/3){
              clearInterval(timer);
              resolve();
          }
      }, 100)
    })
  })
}

async function getMaskResult(){
  const masks = []
  for (let i = 0; i < urls.length; i++) {
    const mask = await getMaskItem(urls[i])
    masks.push(mask)
  }
  fs.writeFile('jmMasks2.json', JSON.stringify(masks), (err) => {

  })
}

getMaskResult()
