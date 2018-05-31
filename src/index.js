import storeFactory from './store'
import {
  addDay,
  removeDay,
  setGoal,
  addError,
  clearError,
  changeSuggestions,
  clearSuggestions,
  randomGoals
} from './actions'

const store = storeFactory()

store.dispatch(
  randomGoals()
)
