import chromatism from "chromatism"

import Model from "../models/style.model"
import { shade } from "../helpers/shade"

const setLight = state => {
  state = state.set("darkStyle", {
    backgroundColor: "#e6e6e6",
    color: shade(state.get("backgroundColor"), state.get("shade")),
  })
  return state
}
const setDark = state => {
  state = state.set("darkStyle", {
    color: "white",
    backgroundColor: shade(state.get("backgroundColor"), state.get("shade")),
  })
  return state
}

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case "RESET":
      state = new Model()
      break
    case "GENERATE":
      state = state.set("untouched", false)
      break
    case "TOGGLE_LIGHT":
      state = state.set("light", true)
      break
    case "TOGGLE_DARK":
      state = state.set("light", false)
      break
    case "UPDATE_STYLE":
      state = state.merge(action.payload, { untouched: false, })

      if (state.get("color") === state.get("backgroundColor")) {
        const color = chromatism.complementary(state.get("backgroundColor")).hex

        state = state.set("color", color)
      }
      break
  }

  state = state.get("light") ? setLight(state) : setDark(state)
  return new Model(state).toJS()
}
