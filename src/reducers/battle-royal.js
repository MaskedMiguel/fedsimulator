import Model from "../models/battle-royal.model"
import WrestlerModel from "../models/battle-royal.wrestler.model"
import * as types from "../actions/types"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case types.RESET:
    case types.RESET_BATTLE_ROYAL:
      state = new Model()
      break

    case types.UPDATE_BATTLE_ROYAL:
      state = state.merge(action.payload)
      break
  }

  const entries = state.get("entries").map(item => new WrestlerModel(item).toJS())

  state = state.set("entries", entries)
  return new Model(state).toJS()
}
