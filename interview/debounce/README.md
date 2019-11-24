## 防抖节流

```js
// 获取 点击提交按钮
let onSubmit = document.getElementById('submit')
// 监听 点击事件
onSubmit.addEventListener('click', function() {
  test()
})

function test() {
  console.log('提交成功')
}
```

```js
// 防抖
function debounce(fn, time) {
  let previous = 0, timer = null
  // 将 debounce 处理的结果 当做函数返回
  return function (...args) {
    // 获取当前的时间 转化为时间戳
    let now = +new Date()

    // 判断上一次触发 的时间和本次触发的 时间差 是否小于时间间隔
    if (now - previous < time) {
      // 设定一个新的 定时器； 定时器 时间结束后 执行 fn()
      
      // 清除 settimeout
      if (timer) clearTimeout(timer)
      
      timer = setTimeout(() => {
        previous = now
        fn.apply(this, args)
      }, time)
    } else {
			previous = now
      fn.apply(this, args)
    }
  }
}
```

