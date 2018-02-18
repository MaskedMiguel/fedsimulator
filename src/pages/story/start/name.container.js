import { compose, withStateHandlers } from "recompose"

const initialState = { name: "", }
const stateHandlers = {
  onChangeName: () => e => ({ name: String(e.target.value), }),
}

export default compose(withStateHandlers(initialState, stateHandlers))
