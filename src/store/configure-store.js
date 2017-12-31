import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import makeRootReducer from "../reducers/index"
import firebase from "firebase"
import { firebase as fbConfig, reduxFirebase as reduxConfig } from "../constants/firebase"

const __DEV__ = true
const version = 5.9
const defaultState = {
  federation: {
    championships: [],
    roster: [],
    matches: [],
    brands: [],
  },
}

export default (initialState = defaultState) => {
  // ======================================================
  // Window Vars Config
  // ======================================================
  window.version = version

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunk.withExtraArgument(getFirebase),
    // This is where you add other middleware like redux-observable
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension())
    }
  }

  // Initialize Firebase instance and Firestore (optional)
  firebase.initializeApp(fbConfig)
  // firebase.firestore()

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      // pass firebase or app instance and config
      reactReduxFirebase(firebase, reduxConfig),
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const reducers = require("../reducers/index").default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
