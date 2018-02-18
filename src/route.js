import React from "react"
import { Route } from "react-router-dom"

const Inner = ({ component: Component, layout: Layout, layoutProps = {}, componentProps = {}, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout {...layoutProps}>
        <Component {...props} {...componentProps} />
      </Layout>
    )}
  />
)

export default Inner
