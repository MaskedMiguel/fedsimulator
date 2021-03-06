import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import Button from "../../components/button/button"
import { resetAll } from "../../actions/game"
import withStyle from "../../hoc/withStyle"
import ToggleTheme from "../../components/toggle-theme"
import HeaderOne from "../../components/header/header"
import SettingsSummary from "./summary"
import SettingsName from "./name"
import SettingsImporter from "./importer"

import "./settings.scss"

class Settings extends Component {
  render() {
    const { style: { highlighted: style, }, } = this.props
    return (
      <div className="settings">
        <HeaderOne>
          Settings
          <span tabIndex="0" className="tools">
            <ToggleTheme />&nbsp;
            <Button value="Reset everything" onClick={this.onReset} classes="btn-bad" />
          </span>
        </HeaderOne>
        <div className="settings" style={style}>
          <SettingsSummary />
          <SettingsName />
          <SettingsImporter />
        </div>
      </div>
    )
  }

  onReset = () => {
    this.props.dispatch(resetAll())
    this.props.history.push("/welcome")
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  style: PropTypes.object,
}

export const enhance = compose(
  connect(null),
  withRouter,
  withStyle //
)

export default enhance(Settings)
