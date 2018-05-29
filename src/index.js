import C from './constants'
import appReducer from './store/reducers'
import {createStore} from 'redux'  // used to build instances of redux stores

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) :
  {}

const store = createStore(appReducer, initialState) // store manages the state

// window.store = store
// to expose store to the console

store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
})

// dispatch actions that mutate the state
store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
})

store.dispatch({
  type: C.SET_GOAL,
  payload: 2
})