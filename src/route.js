import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"

const Inner = ({ children = null, component: Component, layout: Layout, layoutProps = {}, componentProps = {}, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout {...layoutProps}>
        <Component {...props} {...componentProps} />
      </Layout>
    )}>
    {children}
  </Route>
)

Inner.propTypes = {
  children: PropTypes.string,
  component: PropTypes.func,
  layout: PropTypes.func,
  layoutProps: PropTypes.any,
  componentProps: PropTypes.any,
}

export default Inner
