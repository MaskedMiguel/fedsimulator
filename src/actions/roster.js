import * as types from "./types"
import Match from "../helpers/match"

export function simulateRandomMatch({ roster = [], championships = [] }) {
  const brandId = roster[Math.floor(Math.random() * roster.length)].brandId
  const payload = new Match({ roster, brandId, championships })
    .generate()
    .simulate()
    .savePoints()
    .switchChampionships()
    .getRoster()
    .toJS()

  return {
    type: types.UPDATE_ROSTER,
    payload,
  }
}

export function updateWrestler(payload) {
  return {
    type: types.UPDATE_WRESTLER,
    payload,
  }
}

export function createWrestler(wrestler) {
  return {
    type: types.CREATE_WRESTLER,
    payload: wrestler,
  }
}

export function deleteWrestler(id) {
  return {
    type: types.DELETE_WRESTLER,
    payload: id,
  }
}

export function resetRoster() {
  return {
    type: types.RESET_ROSTER,
  }
}
