import C from './constants'
import appReducer from './store/reducers'
import {createStore} from 'redux'  // used to build instances of redux stores

const store = createStore(appReducer) // store manages the state

const unsubscribeGoalLogger = store.subscribe(() => console.log(`  Goal: ${store.getState().goal}`))
// Well every time we call store.subscribe, it returns a function that can be used to unsubscribe that particular method.

setInterval(() => {

  store.dispatch({
    type: C.SET_GOAL,
    payload: Math.floor(Math.random()* 100)
  })

}, 250)

setTimeout(() => {
  unsubscribeGoalLogger()
}, 3000)