import { List } from "immutable"

import Model from "../models/match.model"
import WrestlersReducer from "./match.wrestlers"

export default (state, action) => {
  state = List(state)
  let index

  switch (action.type) {
    case "CREATE_MATCH":
      state = state.push(new Model(action.payload))
      break
    case "RANDOMISE_MATCH":
      {
        const { id, roster, } = action.payload
        if (action.payload) {
          index = state.findIndex(item => item.id === id)

          if (index > -1) {
            state = state.updateIn([index,], item => {
              item.simulated = true
              item.wrestlers = new WrestlersReducer(roster, action)
              return item
            })
          }
        }
      }
      break
    case "SIMULATE_MATCH":
      index = state.findIndex(item => item.id === action.payload)

      state = state.updateIn([index,], item => {
        item.simulated = true
        item.wrestlers = new WrestlersReducer(item.wrestlers, action)
        return item
      })
      break
    case "SELECT_WINNER_IN_MATCH":
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
    case "REMOVE_WRESTLER_FROM_MATCH":
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
    case "ADD_WRESTLER_TO_MATCH":
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
    case "CLEAR_WRESTLERS_FROM_MATCH":
      index = state.findIndex(item => item.id === action.payload)

      state = state.updateIn([index,], item => {
        item.wrestlers = []
        return item
      })
      break
    case "HIT_MOVE_IN_MATCH":
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
    case "RESET_MATCHES":
    case "RESET":
      state = List()
      break
  }
  return state.toJS()
}
