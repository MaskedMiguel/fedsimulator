import * as types from "./types"
import Match from "../helpers/match"

export function simulateRandomMatch({ roster = [], championships = [] }) {
  const randomIndex = Math.floor(Math.random() * roster.length)
  const brandId = roster[randomIndex].brandId

  if (brandId !== null) {
    roster = roster.filter(item => item.brandId === brandId)
  }

  const payload = new Match()
    .randomiseTeams(roster)
    .setChampionships(championships)
    .simulate()
    .updateWinLossRecord()
    .updatePoints()
    .moveChampionship()
    .getWrestlers()

  return {
    type: types.UPDATE_ROSTER,
    payload,
  }
}

export function simulateMatch({ wrestlers = [], championships = [] }) {
  wrestlers = Object.assign([], wrestlers)
  const payload = new Match()
    .setWrestlers(wrestlers)
    .setChampionships(championships)
    .simulate()
    .updateWinLossRecord()
    .updatePoints()
    .moveChampionship()
    .getWrestlers()

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
