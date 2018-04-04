import * as types from "../actions/types"

const initialState = {
  isFetching: false,
  error: false,
  data: [],
}

export default (state = initialState, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case types.FETCH_START:
      state = {
        ...state,
        isFetching: true,
        error: false,
      }
      break

    case types.FETCH_COMPLETE:
      state = {
        ...state,
        isFetching: false,
        error: false,
        receivedAt: +new Date(),
        data: action.data,
      }
      break

    case types.FETCH_ERROR:
      state = {
        ...state,
        isFetching: false,
        error: true,
        data: action.data,
      }
      break
  }
  return state
}
