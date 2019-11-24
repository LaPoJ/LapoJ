import { combineReducers } from 'redux'
import { todos } from '../model/todo'
import { visibilityFilter } from '../model/visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})