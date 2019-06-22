import React from 'react'

const ThemContext = React.createContext({
  theme: 'purple',
  toggleTheme: () => {}
})

class Mybutton extends React.Component {
  render () {
    return (
      <ThemContext>
        {
          (value) => {
            return (
              <button style={ {
                backgroundColor: value.theme
              } }> { this.props.children} </button>
            )
          }
        }
      </ThemContext>
    )
  }
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

export default class Context16 extends React.Component {

  state = {
    theme: 'purple'
  }

  render() {
    const msgs = ['msg1', 'msg2', 'msg3']

    return (
      <ThemContext.Provider value={this.state}>
        {
          msgs.map((msg, i) => {
            return (<Message key={i} text={msg} />)
          })
        }
      </ThemContext.Provider>
    )
  }
}