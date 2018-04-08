import { List } from "immutable"

import * as types from "../actions/types"
import { getId } from "../models/model.helper"
import Model from "../models/taping.model"

export default (state, action) => {
  state = List(state).map(item => new Model(item))
  let index

  switch (action.type) {
    case types.RESET:
    case types.RESET_TAPINGS:
      state = List()
      break

    case types.CREATE_TAPING:
      action.payload.day = Math.floor(Math.random() * 6) + 1
      action.payload.repeat = Math.random() >= 0.5
      state = state.push(new Model(action.payload).merge({ id: getId(), }))
      break

    case types.GENERATE_TAPINGS:
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter((prev, i, self) => i === self.findIndex(next => next.id === prev.id))
      break

    case types.DELETE_TAPING:
      index = state.findIndex(item => item.id === action.payload)

      if (index > -1) {
        state = state.delete(index)
      }
      break

    case types.UPDATE_TAPING:
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index,], item => new Model(item).merge(action.payload))
      }
      break
  }

  return state.toJS()
}
