import chromatism from "chromatism"

import Model from "../models/style.model"
import { shade } from "../helpers/shade"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case "RESET":
      state = new Model()
      break
    case "GENERATE":
      state = state.set("untouched", false)
      break
    case "UPDATE_STYLE":
      state = state.merge(action.payload, { untouched: false, })
      const darkStyle = state.get("darkStyle")
      state = state.set("darkStyle", Object.assign({}, { color: "white", backgroundColor: shade(state.get("backgroundColor"), state.get("shade")), }))

      if (state.get("color") === state.get("backgroundColor")) {
        const color = chromatism.complementary(state.get("backgroundColor")).hex

        state = state.set("color", color)
      }
      break
  }

  return new Model(state).toJS()
}
