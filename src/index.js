import storeFactory from './store'
import { addDay, removeDay, setGoal } from './actions'
// action creators are functions that encapsulate the logic of the app
const store = storeFactory()

store.dispatch(
  addDay("Heavenly", "2016-12-22")
)

store.dispatch(
  removeDay("2016-12-22")
)

store.dispatch(
  setGoal(55)
)