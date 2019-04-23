函数的节流预防抖

阿里js面试第一题
- 搜索建议
  google suggest
  input value -> 进行一个ajax
  存在请求问题 请求太频繁 => caixukun
  分词 灭霸电蚊液
  keyup 没必要每次都进行ajax 太浪费性能了
  过滤无效的请求，打完一个单词再去搜索
  world word js ->打完一个单词再去搜索

- 防抖的关键
  <!-- 频繁输入时，如何减少请求？ -->
```javaScript
  debounce(ajax,500)
  //生成一个函数，控制执行，当停止输入时，发送一次请求打完一个单词之后会有意识的停顿
  //setTimeout delay 之后一定会执行一次，
  //在规定时间内呢？ 被clear
  clearTimeout(func.id);
  func.id = setTimeout(function(){
    func();
  },delay)
  // 返回一个句柄， 不重复的数字， func 函数式对象， id为属性前
```