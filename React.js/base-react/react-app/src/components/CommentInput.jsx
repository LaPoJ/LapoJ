import React from 'react'

export default class CommentInput extends React.Component {

  state = {
    userName: '',
    comment: ''
  }

  handleUserNameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = () => {
    const { userName, comment } = this.state
    const { onSubmit } = this.props

    onSubmit({
      userName,
      comment
    })
  }

  render(){
    // const { userName, comment } = this.state
    return(
      <div>
        <div>
          用户名：<input type="text" placeholder="请输入用户名" onChange={this.handleUserNameChange}/>
        </div>
        <div>
          评论：<textarea name="" id="" cols="30" rows="10" onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <button onClick={this.handleSubmit}>评论</button>
        </div>
      </div>
    )
  }
}