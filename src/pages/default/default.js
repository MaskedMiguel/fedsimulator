import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"

import withGame from "../../hoc/withGame"

class DefaultPage extends Component {
  componentWillMount() {
    let pathName = "dashboard"

    if (!this.props.game.name) {
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
  game: PropTypes.object,
  history: PropTypes.object,
}

export const enhance = compose(withRouter, withGame)

export default enhance(DefaultPage)
