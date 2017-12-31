import { firebaseStateReducer as firebase } from "react-redux-firebase"
import { combineReducers } from "redux"
import federation from "./federation/index"
import game from "./game"
import style from "./style"
import version from "./version"

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    firebase,
    federation,
    game,
    style,
    version,
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer, }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
