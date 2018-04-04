import * as types from "./types"
import { SIMULATE_MATCHES_AMOUNT, MAX_DAMAGE_PER_MOVE } from "../constants/game"
import hitMove from "../helpers/hit-move"
import { getId } from "../models/model.helper"

export function hitMoveInMatch({ wrestlers = [], id = null, }) {
  const { defenciveId, offensiveId, } = hitMove(wrestlers)
  const damage = Math.floor(Math.random() * MAX_DAMAGE_PER_MOVE)
  return {
    type: types.HIT_MOVE_IN_MATCH,
    payload: {
      id,
      damage,
      defenciveId,
      offensiveId,
    },
  }
}

export function createMatch(props) {
  const id = props.id ? props.id : getId()
  const payload = Object.assign({}, props, { id, })
  return {
    type: types.CREATE_MATCH,
    payload,
  }
}

export function resetMatch(matchId) {
  return {
    type: types.RESET_MATCH,
    payload: matchId,
  }
}

export function randomiseMatch({ matchId, roster, }) {
  return {
    type: types.RANDOMISE_MATCH,
    payload: { id: matchId, roster, },
  }
}

export function simulateRandomMatches(amountOfMatches = SIMULATE_MATCHES_AMOUNT) {
  return {
    type: types.SIMULATE_RANDOM_MATCHES,
    payload: { amountOfMatches, },
  }
}

export function simulateMatch(matchId) {
  return {
    type: types.SIMULATE_MATCH,
    payload: matchId,
  }
}

export function removeWrestlerFromMatch({ matchId, wrestlerId, }) {
  return {
    type: types.REMOVE_WRESTLER_FROM_MATCH,
    payload: { matchId, wrestlerId, },
  }
}

export function addWrestlerToMatch({ matchId, wrestler, }) {
  return {
    type: types.ADD_WRESTLER_TO_MATCH,
    payload: { matchId, wrestler, },
  }
}

export function selectWinnerOfMatch({ matchId, wrestlerId, }) {
  return {
    type: types.SELECT_WINNER_IN_MATCH,
    payload: { matchId, wrestlerId, },
  }
}

export function resetMatches() {
  return {
    type: types.RESET_MATCHES,
  }
}
