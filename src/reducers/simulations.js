import Model from "../models/simulations.model"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case "RESET":
      state = new Model()
      break
    case "UPDATE_SIMULATION":
      state = state.merge(action.payload)
      break
  }

  state = Model(state).toJS()
  state.date = new Date(state.date)

  return state
}
