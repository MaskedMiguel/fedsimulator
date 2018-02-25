import * as types from "./types"

export function updateSimulation({ simulationSpeed, simulation, }) {
  return {
    type: types.UPDATE_SIMULATION,
    payload: { simulationSpeed, simulation, },
  }
}
