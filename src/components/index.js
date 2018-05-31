import React from 'react'
import Menu from './ui/Menu'
import Main from '../Main'
import '../stylesheets/index.scss'

export const App = () =>
  <div className="app">
    <Main/>
    <Menu/>
  </div>

export const Whoops404 = ({location}) =>
  <div className="whoops-404">
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
  </div>