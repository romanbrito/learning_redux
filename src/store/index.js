import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

// middleware higher order function that deals with asynchronisity

// const consoleMessages = function (store) {
//   return function (next) {
//     return function (action) {
//
//     }
//   }
// }
// same as above but es6
const consoleMessages = store => next => action => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('ski days', store.getState().allSkiDays.length)
  result = next (action)

  let { allSkiDays, goal, errors, resortNames } = store.getState()

  console.log(`
  ski days: ${allSkiDays.length}
  goal: ${goal}
  fetching: ${resortNames.fetching}
  suggestions: ${resortNames.suggestions}
  errors: ${errors.length}
  
  `)

  console.groupEnd()

  return result
}

// returns a store that was created with the middleware consoleMessages
export default (initialState={}) => {
 return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}