import VERSION from "../constants/version"

export default (state = VERSION, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case "RESET":
      state = VERSION
      break
    case "CHECK_VERSION":
      break
  }
  return state
}
