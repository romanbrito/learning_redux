import C from './constants'
import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import sampleData from './initialState.json'
import storeFactory from './store'
import {Provider} from 'react-redux' // to pass store to the component tree
import {addError} from "./actions";

const initialState = (localStorage["redux-store"]) ?
  JSON.parse(localStorage["redux-store"]) :
  sampleData

const saveState = () =>
  localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(
    addError(error.message)
  )
}

const store = storeFactory(initialState)
store.subscribe(saveState)

// window.React = React
window.store = store

window.addEventListener("error", handleError)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-container')
)

// uncomment below to produce error
// foo =bar