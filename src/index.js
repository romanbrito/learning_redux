import C from './constants'
import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'

ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>,
  document.getElementById('react-container')
)
