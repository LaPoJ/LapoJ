// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM元素
// const mydiv = React.createElement('div', { id: 'mydiv', title: 'div aaa'}, 'zhesidiv')

// 第一种创建组件的方式
function Hello(props) {
  // 如果在一个组件中 return 一个 null 则表示该组件为空， 什么都不渲染
  // 在组件中必须返回一个合法的JSX 虚拟 DOM 元素

  // 组件中的props 的值是不能被改变的 -> 只读

  return <div>这是 Hello 组件--{props.name}--{props.age}--{props.gender}</div>
}

const dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}

const mydiv =
  <div id="mydiv" title="div aaa">

    这是div
    <h1>这是H1</h1>
    {/* 直接把组件的名称 以标签的形式 丢到页面即可 */}
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
    <Hello {...dog}></Hello>
  </div>

// 3. 调用 render 函数渲染
ReactDOM.render(mydiv, document.getElementById('app'));