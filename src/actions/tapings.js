import * as types from "./types"

export function updateTaping(payload) {
  return {
    type: types.UPDATE_TAPING,
    payload,
  }
}

export function createTaping(wrestler) {
  return {
    type: types.CREATE_TAPING,
    payload: wrestler,
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
