import { List } from "immutable"

import { getId } from "../models/model.helper"
import Model from "../models/wrestler.model"

export default (state, action) => {
  state = List(state).map(item => new Model(item))
  let index

  switch (action.type) {
    case "RESET":
    case "RESET_ROSTER":
      state = List()
      break
    case "UPDATE_ROSTER":
      // we do nothing because the new state is already set
      break
    case "GENERATE_ROSTER":
      state = state.merge(List(action.payload.map(item => new Model(item))))
      state = state.filter(
        (prev, i, self) => i === self.findIndex(next => next.id === prev.id),
      )

      action.callback()
      break
    case "DELETE_WRESTLER":
      index = state.findIndex(item => item.id === action.payload)

      if (index > -1) {
        state = state.delete(index)
      }
      break
    case "CREATE_WRESTLER":
      state = state.push(new Model(action.payload).merge({ id: getId() }))
      break
    case "UPDATE_WRESTLER":
      index = state.findIndex(item => item.id === action.payload.id)

      if (index > -1) {
        state = state.updateIn([index], item =>
          new Model(item).merge(action.payload),
        )
      }
      break
  }

  return state.toJS()
}
