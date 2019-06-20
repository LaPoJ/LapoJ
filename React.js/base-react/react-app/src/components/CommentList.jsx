import React from 'react'

export default class CommentList extends React.Component {
  render(){
    const { commentLists } = this.props
    return(
      <div className="comment-list">
        <ul>
          {
            commentLists.map(({ userName, comment }, i) => (
              <li key={i}>
                { userName }
                <br/>
                { comment }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}