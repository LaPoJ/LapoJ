import React from 'react'

import CmtItem from '@/components/CmtItem'

const styleApp = { color: 'red', fontSize: '45px', fontWeight: 200, textAlign: 'center' }

export default class CmtList extends React.Component{
  constructor(){
    super();
    this.state = {
      CommentList: [
        { id: 1, user: '张三1', content: '哈哈1'},
        { id: 2, user: '张三2', content: '哈哈2' },
        { id: 3, user: '张三3', content: '哈哈3' },
        { id: 4, user: '张三4', content: '哈哈4' },
        { id: 5, user: '张三5', content: '哈哈5' },
      ]
    }
  }


  render(){
    return <div>
      <h1 style={styleApp}>评论列表</h1>
      {this.state.CommentList.map( item => <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
    
  }
}