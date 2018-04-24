import { List } from "immutable"

import * as types from "../actions/types"
import { getId } from "../models/model.helper"
import Model from "../models/wrestler.model"

export default (state, action) => {
  state = List(state).map(item => new Model(item).toJS())
  let index

  switch (action.type) {
    case types.RESET:
    case types.RESET_ROSTER:
      state = List()
      break

    case types.UPDATE_ROSTER:
      action.payload.forEach(wrestler => {
        const index = state.findIndex(item => item.id === wrestler.id)

        if (index > -1) {
          state = state.updateIn([index,], () => new Model(wrestler))
        }
      })
      break

    case types.GENERATE_ROSTER:
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter((prev, i, self) => i === self.findIndex(next => next.id === prev.id))
      break

    case types.DELETE_WRESTLER:
      index = state.findIndex(item => item.id === action.payload)

      if (index > -1) {
        state = state.delete(index)
      }
      break

    case types.CREATE_WRESTLER:
      {
        const { payload, } = action
        const id = payload.id ? payload.id : getId()

        state = state.push(new Model(payload).merge({ id, }))
      }
      break
    case types.UPDATE_WRESTLER:
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index,], item => new Model(item).merge(action.payload))
      }
      break
  }

  return state.toJS()
}
