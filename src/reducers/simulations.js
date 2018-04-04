import Model from "../models/simulations.model"

import * as types from "../actions/types"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case types.RESET:
      state = new Model()
      break

    case types.UPDATE_SIMULATION:
      state = state.merge(action.payload)
      break
  }

  state = Model(state).toJS()
  state.date = new Date(state.date)

  return state
}
