import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ShowErrors from './components/containers/ShowErrors'
import GoalProgress from './components/containers/GoalProgress'
import SkiDayCount from './components/containers/SkiDayCount'
import { Whoops404 } from './components'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'

const Frontpage = () =>
  <div>
    <ShowErrors/>
    <SkiDayCount/>
    <GoalProgress/>
  </div>


const main = (props) => {

  return (
    <Switch>
      <Route exact path="/" component={Frontpage}/>
      <Route exact path="/add-day" component={AddDayForm}/>
      <Route exact path="/list-days" component={SkiDayList}/>
      <Route path="/list-days/:filter" component={SkiDayList}/>
    </Switch>
  )
}

export default main