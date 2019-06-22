import React from 'react'
import propTypes from 'prop-types'

export default class Context extends React.Component {

  state = {
    msgs : [
      'msg1', 'msg2', 'msg3'
    ]
  }

  getChildContext () {
    return { color: 'purple' }
  }

  render() {
    const msgNodes = this.state.msgs
      .map((msg, i) => {
        return (<Message text={msg} key={ i } />)
      })
    return(
      <div>
        { this.props.children }
        { msgNodes }
      </div>
    )
  }
}

Context.childContextTypes = {
  color: propTypes.string
}

class Message extends React.Component{
  render() {
    const { text } = this.props
    return (
      <div>
        { text }
        <Mybutton>delete</Mybutton>
      </div>
    )
  }
}

class  Mybutton extends React.Component{
  render(){
    return (
      <button style={ { backgroundColor: this.context.color } }>{ this.props.children }</button>
    )
  }
}

Mybutton.contextTypes = {
  color: propTypes.string
}