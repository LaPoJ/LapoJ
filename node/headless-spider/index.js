const puppeteer = require('puppeteer')
const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, time);
})

async function getLeetCode() {
  // 默认 以无头启动
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage()
  page.setViewport({
    width: 1920,
    height: 1080
  })
  await page.goto('https://leetcode-cn.com/u/lp_zx/', {
    waitUntil: 'networkidle2'
  })
  sleep(1000)
  const data = await page.evaluate(() => {
    const rank = document.querySelector('.css-1x529is-RankNumber')
    const submitHistory = document.querySelectorAll('.css-i7v0bm-StackRow')
    const submitHistoryArray = Array.from(submitHistory)
    const submitHistoryList = submitHistoryArray.map(submitNode => {
      return submitNode.innerText
    })
    return {
      rank: rank.innerText,
      submitHistoryList
    }
  })

  console.log(data)

  await page.screenshot({
    path: './pj.png'
  })
  browser.close()
}

getLeetCode()