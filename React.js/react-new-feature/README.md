## Concurrent mode
  async mode
  让 react 的整体渲染有优先级的排比
  浏览器 是多线程
  1. ui 线程
  2. js 线程
  3. 事件
  4. http
  -- js 线程和 ui 线程 是 互斥的： js 可以操作 dom
