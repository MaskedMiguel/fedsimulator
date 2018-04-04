import { List } from "immutable"

import * as types from "../actions/types"
import Model from "../models/show.model"
import { getId } from "../models/model.helper"

export default (state, action) => {
  state = List(state).map(item => new Model(item))
  let index

  switch (action.type) {
    case types.RESET:
    case types.RESET_SHOWS:
      state = List()
      break

    case types.GENERATE_SHOWS:
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter((prev, i, self) => i === self.findIndex(next => next.id === prev.id))

      action.callback()
      break

    case types.CREATE_SHOW:
      {
        const { payload, } = action
        const id = payload.id ? payload.id : getId()

        state = state.push(new Model(payload).merge({ id, }))
      }
      break

    case types.UPDATE_SHOW:
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index,], item => new Model(item).merge(action.payload))
      }

      break

    case types.DELETE_SHOW:
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
