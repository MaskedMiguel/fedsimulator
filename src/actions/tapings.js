import * as types from "./types"

export function updateTaping(payload) {
  return {
    type: types.UPDATE_TAPING,
    payload,
  }
}

export function createTaping(taping) {
  return {
    type: types.CREATE_TAPING,
    payload: taping,
  }
}

export function deleteTaping(id) {
  return {
    type: types.DELETE_TAPING,
    payload: id,
  }
}

export function resetTapings() {
  return {
    type: types.RESET_TAPINGS,
  }
}
