import React from 'react';
// import logo from './logo.svg';
import './App.css';

import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'

export default class App extends React.Component {

  state = {
    commentLists: []
  }

  handleSubmit = (val) => {
    console.log('从子组件：', val)
    let commentLists = this.state.commentLists.slice(0)
    if (val.userName !== '' && val.comment !== '') {
      commentLists.push(val)
    }else{
      alert('用户名或内容不能为空...')
    }


    this.setState({
      commentLists
    })
  }

  render() {
    const { commentLists } = this.state
    return (
      <div className="comment">
        <CommentInput onSubmit={this.handleSubmit}/>
        <CommentList commentLists={commentLists} />
      </div>
    )
  }
}
