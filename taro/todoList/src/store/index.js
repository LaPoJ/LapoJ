import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'reudx-thunk'
import { createLogger } from 'redux-logger'

const middleware = [
  thunkMiddleware,
  createLogger()
]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middleware))
  return store
}