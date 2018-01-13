import * as types from "./types"

export function updateStyle(payload) {
  return {
    type: types.UPDATE_STYLE,
    payload,
  }
}

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
