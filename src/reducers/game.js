import Model from "../models/game.model"

export default (state, action) => {
  state = new Model(state)

  switch (action.type) {
    case "RESET":
    case "RESET_GAME":
      state = new Model()
      break
    case "GENERATE":
      state = state.set("name", "WWE")
      state = state.set("started", true)
      break
    case "UPDATE_GAME":
      state = state.merge(action.payload)

      break
  }

  state = Model(state).toJS()
  state.date = new Date(state.date)

  return state
}
