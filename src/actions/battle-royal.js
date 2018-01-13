import * as types from "./types"
import shuffle from "lodash.shuffle"

export function eliminateEntry(currentEntries) {
  const availableEliminations = currentEntries.filter(item => !item.eliminationNumber)
  const possibleEliminations = availableEliminations.slice(0, 4)

  if (possibleEliminations.length > 0) {
    const id = possibleEliminations[Math.floor(Math.random() * possibleEliminations.length)].id
    const index = currentEntries.findIndex(item => item.id === id)
    currentEntries[index].eliminationNumber = availableEliminations.length
  }

  const entries = Object.assign([], currentEntries)

  return {
    type: types.UPDATE_BATTLE_ROYAL,
    payload: { entries, },
  }
}

export function updateBattleRoyal(payload) {
  return {
    type: types.UPDATE_BATTLE_ROYAL,
    payload,
  }
}

export function generateEntries({ roster, male, amountOfEntries, }) {
  let entries = roster.filter(item => item.male === male)
  entries = shuffle(entries).slice(0, amountOfEntries)

  return {
    type: types.UPDATE_BATTLE_ROYAL,
    payload: { entries, },
  }
}

export function resetBattleRoyal() {
  return {
    type: types.RESET_BATTLE_ROYAL,
  }
}

export function selectWinner(predictionId) {
  return {
    type: types.SELECT_BATTLE_ROYAL_WINNER,
    payload: { predictionId, },
  }
}
