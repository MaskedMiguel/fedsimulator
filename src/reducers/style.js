import chromatism from "chromatism"

import Model from "../models/style.model"
import { shade as shadeFn } from "../helpers/shade"

const shade = -10

const updateStyle = state => {
  const hex = state.get("hex")
  const isLight = state.get("light")

  const lightBackgroundColor = hex
  const darkBG = shadeFn(lightBackgroundColor, shade + -30)

  const highlightBG = lightBackgroundColor
  const highlightColor = chromatism.contrastRatio(highlightBG).hex

  const containerBG = isLight ? "#f4f2f2" : darkBG
  const containerColor = chromatism.contrastRatio(containerBG).hex

  return {
    highlighted: {
      color: highlightColor,
      backgroundColor: highlightBG,
    },
    container: {
      color: containerColor,
      backgroundColor: containerBG,
    },
  }
}

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case "RESET":
      state = new Model()
      break
    case "UPDATE_STYLE_HEX":
      state = state.merge(action.payload)
      break
    case "TOGGLE_LIGHT":
      state = state.set("light", true)
      break
    case "TOGGLE_DARK":
      state = state.set("light", false)
      break
  }

  state = state.merge(updateStyle(state))
  return new Model(state).toJS()
}
