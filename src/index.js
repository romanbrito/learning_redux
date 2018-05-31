import C from './constants'
import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import sampleData from './initialState.json'
import storeFactory from './store'
import {Provider} from 'react-redux' // to pass store to the component tree

const initialState = (localStorage["redux-store"]) ?
  JSON.parse(localStorage["redux-store"]) :
  sampleData

const saveState = () =>
  localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

// window.React = React
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-container')
)
