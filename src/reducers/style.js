import * as types from "../actions/types"
import Model from "../models/style.model"

const updateStyle = state => {
  const isLight = state.get("light")

  return {
    highlighted: {
      color: "white",
      backgroundColor: "#232526",
      backgroundImage: "#232828",
    },
    container: {
      color: isLight ? "black" : "white",
      backgroundColor: isLight ? "#cacaca" : "#232828",
      backgroundImage: isLight ? "linear-gradient(to right, #cacaca, #ec6323)" : "linear-gradient(to bottom, #18308a 0%,#417bbb 30%,#417bbb 61%,#18308a 100%)",
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
