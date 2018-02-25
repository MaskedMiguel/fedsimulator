import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import Button from "../../components/button/button"
import { resetAll } from "../../actions/game"

import Settings from "./settings"
import ToggleTheme from "../../components/toggle-theme"
import HeaderOne from "../../components/header/header"

class SettingsWrapper extends Component {
  render() {
    return (
      <section className="page settings">
        <HeaderOne>
          Settings
          <span tabIndex="0" className="tools">
            <ToggleTheme />&nbsp;
            <Button value="Reset everything" onClick={this.onReset} classes="btn-bad" />
          </span>
        </HeaderOne>
        <Settings />
      </section>
    )
  }

  onReset = () => {
    this.props.dispatch(resetAll())
    this.props.history.push("/welcome")
  }
}

SettingsWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export const enhance = compose(
  connect(null),
  withRouter //
)

export default enhance(SettingsWrapper)
