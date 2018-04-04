import { List } from "immutable"

import * as types from "../actions/types"
import Model from "../models/match.model"
import WrestlersReducer from "./match.wrestlers"

export default (state, action) => {
  state = List(state)
  let index

  switch (action.type) {
    case types.RESET_MATCHES:
    case types.RESET:
      state = List()
      break

    case types.RESET_MATCH:
      index = state.findIndex(item => item.id === action.payload)

      state = state.updateIn([index,], item => {
        item.simulated = false
        item.wrestlers = new WrestlersReducer(item.wrestlers, action)
        return item
      })
      break

    case types.CREATE_MATCH:
      state = state.push(new Model(action.payload))
      break

    case types.RANDOMISE_MATCH:
      {
        const { id, roster, } = action.payload

        if (action.payload) {
          index = state.findIndex(item => item.id === id)

          if (index > -1) {
            state = state.updateIn([index,], item => {
              item.simulated = false
              item.wrestlers = new WrestlersReducer(roster, action)
              return item
            })
          }
        }
      }
      break

    case types.SIMULATE_MATCH:
      index = state.findIndex(item => item.id === action.payload)

      state = state.updateIn([index,], item => {
        item.simulated = true
        item.wrestlers = new WrestlersReducer(item.wrestlers, action)
        return item
      })
      break

    case types.SELECT_WINNER_IN_MATCH:
      {
        const { matchId, } = action.payload

        index = state.findIndex(item => item.id === matchId)

        if (index > -1) {
          state = state.update(index, item => {
            item.wrestlers = new WrestlersReducer(item.wrestlers, action)
            return new Model(item).merge({ simulated: false, })
          })
        }
      }
      break

    case types.REMOVE_WRESTLER_FROM_MATCH:
      {
        const { matchId, } = action.payload

        index = state.findIndex(item => item.id === matchId)

        if (index > -1) {
          state = state.update(index, item => {
            item.wrestlers = new WrestlersReducer(item.wrestlers, action)
            return new Model(item).merge({ simulated: false, })
          })
        }
      }
      break

    case types.ADD_WRESTLER_TO_MATCH:
      index = state.findIndex(item => item.id === action.payload.matchId)

      if (index > -1) {
        state = state.update(index, item => {
          return new Model(item).merge({
            simulated: false,
            wrestlers: new WrestlersReducer(item.wrestlers, action),
          })
        })
      }
      break

    case types.CLEAR_WRESTLERS_FROM_MATCH:
      index = state.findIndex(item => item.id === action.payload)

      state = state.updateIn([index,], item => {
        item.wrestlers = []
        return item
      })
      break

    case types.HIT_MOVE_IN_MATCH:
      {
        const { id, damage, defenciveId, offensiveId, } = action.payload

        index = state.findIndex(item => item.id === id)

        let nowHasAWinner = false

        state = state.updateIn([index,], bout => {
          const offensiveIndex = bout.wrestlers.findIndex(item => item.id === offensiveId)
          const defenciveIndex = bout.wrestlers.findIndex(item => item.id === defenciveId)
          const health = bout.wrestlers[defenciveIndex].health - damage
          nowHasAWinner = health < 1
          bout.wrestlers[defenciveIndex].health = health
          bout.wrestlers[defenciveIndex].loser = nowHasAWinner

          if (nowHasAWinner) {
            bout.wrestlers[offensiveIndex].winner = true
          }

          bout.simulated = bout.wrestlers.filter(item => item.health < 1).length > 0
          bout.wrestlers = new WrestlersReducer(bout.wrestlers, action)
          return bout
        })
      }
      break
  }
  return state.toJS()
}
