import * as types from "./types"

export function updateGameSimulation({ simulationSpeed, simulation }) {
  return {
    type: types.UPDATE_GAME_SIMULATION,
    payload: { simulationSpeed, simulation },
  }
}

export function toggleStarted() {
  return {
    type: types.TOGGLE_STARTED,
  }
}

export function updateName(name) {
  return {
    type: types.UPDATE_NAME,
    payload: { name },
  }
}

export function resetAll() {
  return {
    type: types.RESET,
  }
}
