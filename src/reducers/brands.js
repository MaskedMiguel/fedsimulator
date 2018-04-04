import { List } from "immutable"

import Model from "../models/brand.model"
import { getId } from "../models/model.helper"
import * as types from "../actions/types"

export default (state, action) => {
  state = List(state).map(item => new Model(item))
  let index

  switch (action.type) {
    case types.RESET:
    case types.RESET_BRANDS:
      state = List()
      break

    case types.GENERATE_BRANDS:
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter((prev, i, self) => i === self.findIndex(next => next.id === prev.id))

      action.callback()
      break

    case types.CREATE_BRAND:
      state = state.push(new Model(action.payload).merge({ id: getId(), }))
      break

    case types.UPDATE_BRAND:
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index,], item => new Model(item).merge(action.payload))
      }
      break

    case types.DELETE_BRAND:
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
