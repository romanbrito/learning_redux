import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'

const routes = (props) => {

  return (
    <Switch>
      <Route path="/" component={App}/>
      <Route path="/add-day" component={AddDayForm}/>
      <Route path="/list-days" component={SkiDayList}/>
      <Route path="/:filter" component={SkiDayList}/>
      <Route path="/*" component={Whoops404}/>
    </Switch>
  )
}

export default routes