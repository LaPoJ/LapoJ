# React 15.X.X 生命周期函数

## 挂载阶段

第一次渲染

- componentDidMount
- componentWillMount

```jsx
componentDidMount () {
  console.log('componentDidMount function')
}
componentWillMount () {
  console.log('componentWillMount function')
}
render(){
  console.log('render function')
}

// componentWillMount function
// render function
// componentDidMount function
```



## 更新阶段

页面更新

```jsx
// App.jsx

import React from 'react'
import './App.css'
import Child from './components/Child'

export default class App extends React.Component {
  state = {
    count: 0
  }
  handleChildPropsChange = () => {
    let { count } = this.state
    count++
    this.setState({
      count
    })
  }
  render() {
    const { count }  = this.state
    return (
      <div>
        <button onClick={ this.handleChildPropsChange }>
          child component props change
        </button>
        <Child count={ count }/>
      </div>
    )
  }
}
```

```jsx
// Child.jsx

import React from 'react'

export default class Child extends React.Component{

  // props 更新
  // 组件性能优化的时候需要的，控制不必要的更新
  shouldComponentUpdate () {
     console.log('shouldComponentUpdate function')
    if (nextProps.count !== this.props.count) {
      return true
    }
    return false
  }
  
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  componentWillUpdate () {
    console.log('componentWillUpdate function')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate function')
  }


  render(){
    const { count } = this.props
    console.log('render function')
    return (
      <div>
        Child component: { count }
      </div>
    )
  }
}
```

结果

```jsx
// componentWillReceiveProps

// shouldComponentUpdate function

// componentWillUpdate function

// render function

// componentDidUpdate function
```

> shouldComponentUpdate
>
> - true 更新
> - false 不更新

> componentWillUnmount
>
> 1. 清理
> 2. 定时器
> 3. 全局的绑定事件



## 跨层级

## 15.x.x 版本的跨层级问题

######  需求： 更换颜色 red blue

```json
// parent
{
  theme: 'red'
}
```

层层传递，父组件 -> 子组件 -> 孙组件

> getChildContext 返回提供的 context 内容
>
> 父组件 .childContextTypes 定义提供的 context 类型
>
> 子组件： 获取  .contextTypes 定义接受的类型 
> 	this.context 获取
>
> 问题：
> 	跨层级传递的时候，加入中间某一组件中有 `shouldComponentUpdata()`函数
>
> ```jsx
> shouldComponentUpdate () {
>   return false
> }
> ```
>
> 这样导致后面的组件不会更新， 所以 `context ` 的数据不会更新



## 16.x.x

