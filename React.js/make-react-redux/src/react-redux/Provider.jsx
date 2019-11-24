import React from 'react'
import { Provider } from './context'

export default class EnhancedProvider extends React.Component{
  constructor(props){
    super(props)
    const { store } = this.props
    this.state = {
      state: store.getState(),
      dispatch: store.dispatch
    }
    store.subscribe(() => {
      this.setState({
        state: store.getState()
      })
    })
  }
  state = {  }

  render () {
    const { store } = this.props
    const { state,dispatch } = this.state
    return (
      <Provider value={ { state, dispatch} }>
        { this.props.children }
      </Provider>
    )
  }
}

