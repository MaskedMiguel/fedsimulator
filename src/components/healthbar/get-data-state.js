const getDataState = percent => {
  let state = "lg"

  if (percent < 34) {
    state = "xs"
  } else if (percent > 34 && percent < 67) {
    state = "md"
  }
  return state
}

export default getDataState
