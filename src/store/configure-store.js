import reducers from "../reducers"
import persistState from "redux-localstorage"
import { createStore, compose, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'

const storeEnhancer = compose(
  applyMiddleware(
    thunkMiddleware
  ),
  persistState(),
  typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
)

export default initialState => {
  return createStore(reducers, initialState, storeEnhancer)
}
