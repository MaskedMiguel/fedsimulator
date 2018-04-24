import * as types from "./types"

export function updateShow(payload) {
  return {
    type: types.UPDATE_SHOW,
    payload,
  }
}

export function createShow(payload) {
  return {
    type: types.CREATE_SHOW,
    payload,
  }
}

export function deleteShow(id) {
  return {
    type: types.DELETE_SHOW,
    payload: id,
  }
}

export function addBoutToShow({ show, boutId, }) {
  const payload = Object.assign({}, show)

  payload.bouts.unshift(boutId)

  return {
    type: types.UPDATE_SHOW,
    payload,
  }
}

export function resetShows() {
  return {
    type: types.RESET_SHOWS,
  }
}
