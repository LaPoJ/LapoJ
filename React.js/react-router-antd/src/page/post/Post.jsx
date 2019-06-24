import React from 'react'

export default class Post extends React.Component{
  render() {
    const { match } = this.props

    return (
      <div>
        { match.params.id }
      </div>
    )
  }
}