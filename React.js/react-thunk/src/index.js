import React from 'react'
import ReactDOM from 'react-dom'
import createStore, { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import reducer from './reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()
