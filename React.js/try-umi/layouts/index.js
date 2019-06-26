import React from 'react'

export default class App extends React.Component{
  state = {

  }

  render () {
    const { children } = this.props
    return (
      <React.FFragment>
        <div> Header </div>
        <hr/>
        {
          children
        }
        <hr/>
        <div> Footer </div>
      </React.FFragment>
    )
  }
}