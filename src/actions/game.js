import * as types from "./types"

import defaultGame from "../models/game.model"

export function updateGame(payload) {
  return {
    type: types.UPDATE_GAME,
    payload,
  }
}

export function updateName(name) {
  return {
    type: types.UPDATE_GAME,
    payload: { name, },
  }
}

export function resetGame() {
  return {
    type: types.UPDATE_GAME,
    payload: Object.assign({}, defaultGame),
  }
}

export function resetAll() {
  return {
    type: types.RESET,
  }
}
