import Model from "../models/game.model"
import * as types from "../actions/types"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case types.RESET:
    case types.RESET_GAME:
      state = new Model()
      break

    case types.GENERATE:
      state = state.set("name", "WWE")
      break

    case types.UPDATE_GAME:
      state = state.merge(action.payload)

      break
  }

  state = Model(state).toJS()
  state.date = new Date(state.date)

  return state
}
