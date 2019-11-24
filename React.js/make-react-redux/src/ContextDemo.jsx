import React from 'react'
const context = React.createContext()

export default class A extends React.Component{
  state = {
    store: 1
  }

  render () {
    const { store } = this.state
    return (
    <context.Provider value={ store }>
      <B />
    </context.Provider>
    )
  }
}

function B() {
  return (
    <C />
  )
}

class C extends React.Component {
  state = {}
  render (){
    return (
      <div>
        <context.Consumer>
          {
            (store) => {
              return (<h2>{ store }</h2>)
            }
          }
        </context.Consumer>
      </div>
    )
  }
}