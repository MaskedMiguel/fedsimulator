import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router"
import chromatism from "chromatism"

import { Reset } from "../../components/icons"
import Social from "../../components/social"
import ColorPickers from "../../components/color-pickers/container"
import { resetAll } from "../../actions/game"
import HeaderOne from "../../components/header/header"

import "./settings.scss"

const BRIGHTNESS_REDUCTION_STEP = 4

class Settings extends Component {
  render() {
    const { style, } = this.props
    let brightness = 0
    const reduceBrightness = () => {
      brightness = brightness + BRIGHTNESS_REDUCTION_STEP
      return {
        color: style.color,
        backgroundColor: chromatism.brightness(brightness, style.backgroundColor).hex,
      }
    }

    return (
      <section className="page settings">
        <HeaderOne>Settings</HeaderOne>
        <div className="row">
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <Link tabIndex="0" to="name">
                Name your federation
              </Link>
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <ColorPickers />
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <a tabIndex="0" onClick={this.onReset}>
                <Reset />
                &nbsp;Reset game
              </a>
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <Social />
            </div>
          </div>
        </div>
      </section>
    )
  }

  onReset = () => {
    const { router, dispatch, } = this.props

    dispatch(resetAll())
    router.push("/default")
  }
}

Settings.contextTypes = {
  router: PropTypes.object.isRequired,
}

Settings.propTypes = {
  style: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  style: state.style,
}))(Settings)
