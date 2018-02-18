import * as types from "./types"

import { addOneDay } from "../constants/dates"
import defaultGame from "../models/game.model"

export function addOneDayToGame(game) {
  const date = addOneDay(game.date)
  const payload = Object.assign({}, game, { date, })

  return {
    type: types.UPDATE_GAME,
    payload,
  }
}

export function toggleStarted() {
  return {
    type: types.TOGGLE_STARTED,
  }
}

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
