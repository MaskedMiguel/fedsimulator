import axios from "axios"

const NOOP = () => {}

export const importData = ({ payload, type, callback = NOOP, }) => {
  return {
    type,
    payload,
    callback,
  }
}

export const fetchComplete = json => {
  return {
    type: "FETCH_COMPLETE",
    data: json,
  }
}
export const fetchError = json => {
  return {
    type: "FETCH_ERROR",
    data: json,
  }
}
export const fetchStart = () => {
  return {
    type: "FETCH_START",
  }
}

export const fetchData = url => {
  return dispatch => {
    dispatch(fetchStart())
    return axios
      .get(url)
      .then(response => {
        dispatch(fetchComplete(response.data))
      })
      .catch(error => {
        dispatch(fetchError(error.message))
      })
  }
}
