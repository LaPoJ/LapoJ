import React from 'react'

export default class BindEvent extends React.Component{
  constructor(){
    super()
    // 私有数据
    this.state = {}
  }

  render(){
    return (
      <div>
        BindEvent 组件
        <hr />
        {/* 在React 中 有一套自己的事件绑定机制，小驼峰命名 */}
        {/* <button onClick={function(){ console.log('click')}}>按钮</button> */}
        <button onClick={ this.myClick }>按钮</button>
      </div>
    )
  }

  myClick(){
    console.log(2222);
  }
}