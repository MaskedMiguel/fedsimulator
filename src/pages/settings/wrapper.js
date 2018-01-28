import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Reset } from "../../components/icons"
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
            <ToggleTheme />
            <Reset onClick={this.onReset} />
          </span>
        </HeaderOne>
        <Settings />
      </section>
    )
  }

  onReset = () => {
    const { router, dispatch, } = this.props

    dispatch(resetAll())
    router.push("/default")
  }
}

SettingsWrapper.contextTypes = {
  router: PropTypes.object.isRequired,
}

SettingsWrapper.propTypes = {
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(null)(SettingsWrapper)
