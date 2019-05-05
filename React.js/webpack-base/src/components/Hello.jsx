import React from 'react'

// 第一种创建组件的方式
export default function Hello(props) {
  // 如果在一个组件中 return 一个 null 则表示该组件为空， 什么都不渲染
  // 在组件中必须返回一个合法的JSX 虚拟 DOM 元素

  // 组件中的props 的值是不能被改变的 -> 只读

  return <div>这是 Hello 组件--{props.name}--{props.age}--{props.gender}</div>
}

// 暴露组件
// export default Hello