//https://gist.github.com/aamnah/2ebe6049fa1822c2e72d64c85a350874

const initialState = {
  isFetching: false,
  error: false,
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      state = {
        ...state,
        isFetching: true,
        error: false,
      }
    case "FETCH_COMPLETE":
      state = {
        ...state,
        isFetching: false,
        error: false,
        receivedAt: +new Date(),
        data: action.data,
      }
    case "FETCH_ERROR":
      state = {
        ...state,
        isFetching: false,
        error: true,
        data: action.data,
      }
  }
  return state
}
