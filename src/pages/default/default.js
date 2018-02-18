import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { withRouter } from "react-router-dom"

import PropTypes from "prop-types"

class DefaultPage extends Component {
  componentWillMount() {
    let pathName = "dashboard"

    if (!this.props.name) {
      pathName = "/welcome"
    }

    this.props.history.push(pathName)
  }

  render() {
    return null
  }
}

DefaultPage.displayName = "DefaultPage"

DefaultPage.propTypes = {
  name: PropTypes.string.isRequired,
}

export const enhance = compose(
  withRouter,
  connect(state => ({
    name: state.game.name,
  }))
)

export default enhance(DefaultPage)
