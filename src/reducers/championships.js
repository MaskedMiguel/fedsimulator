import { List } from "immutable"

import Model from "../models/championship.model"
import { getId } from "../models/model.helper"
import * as types from "../actions/types"

export default (state, action) => {
  state = List(state).map(item => new Model(item))
  let index

  switch (action.type) {
    case types.RESET:
    case types.RESET_CHAMPIONSHIPS:
      state = List()
      break

    case types.GENERATE_CHAMPIONSHIPS:
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter((prev, i, self) => i === self.findIndex(next => next.id === prev.id))
      break

    case types.CREATE_CHAMPIONSHIP:
      state = state.push(new Model(action.payload).merge({ id: getId(), }))
      break

    case types.UPDATE_CHAMPIONSHIP:
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index,], item => new Model(item).merge(action.payload))
      }
      break

    case types.DELETE_CHAMPIONSHIP:
      index = state.findIndex(item => item.id === action.payload)

      if (index > -1) {
        state = state.delete(index)
      }
      break
  }

  return List(state)
    .map(item => new Model(item))
    .toJS()
}
