const filmReducer = require('./filmReducer.js')
const { combineReducers } = require('redux')
const filmFilterReducer = require('./filmFilter.js')

module.exports = combineReducers({
  films: filmReducer,
  filter: filmFilterReducer
})