import * as types from "./types"

export function toggleDark() {
  return {
    type: types.TOGGLE_DARK,
  }
}

export function toggleLight() {
  return {
    type: types.TOGGLE_LIGHT,
  }
}
