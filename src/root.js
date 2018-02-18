import React from "react"
import { Provider } from "react-redux"

import Routes from "./routes"
import configureStore from "./store/configure-store"

const store = configureStore()

export default function Root() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
