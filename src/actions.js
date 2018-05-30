import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {
// Add app logic here

  return {
    type: C.ADD_DAY,
    payload: {resort,date,powder,backcountry}
  }
}

export const removeDay = function (date) {

  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = goal =>
  ({
    type: C.SET_GOAL,
    payload: goal
  })
// different ways of declaring functions