import * as types from "./types"

export function updateStyleHex(hex) {
  return {
    type: types.UPDATE_STYLE_HEX,
    payload: { hex, },
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
