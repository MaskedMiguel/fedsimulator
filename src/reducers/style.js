import chromatism from "chromatism"

import * as types from "../actions/types"
import Model from "../models/style.model"

const updateStyle = state => {
  const isLight = state.get("light")

  return {
    highlighted: {
      color: "white",
      backgroundColor: "#232526",
      backgroundImage: "linear-gradient(to top, #232526, #414345)",
    },
    container: {
      color: isLight ? "black" : "white",
      backgroundColor: isLight ? "#cacaca" : "#232526",
      backgroundImage: isLight ? "linear-gradient(to right, #cacaca, #e2e2e2)" : "linear-gradient(to bottom, black, #414345)",
    },
  }
}

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case types.RESET:
      state = new Model()
      break

    case types.TOGGLE_LIGHT:
      state = state.set("light", true)
      break

    case types.TOGGLE_DARK:
      state = state.set("light", false)
      break
  }

  state = state.merge(updateStyle(state))
  return new Model(state).toJS()
}
