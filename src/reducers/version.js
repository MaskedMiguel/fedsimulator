import VERSION from "../constants/version"

import * as types from "../actions/types"

export default (state = VERSION, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case types.RESET:
      state = VERSION
      break
  }
  return state
}
