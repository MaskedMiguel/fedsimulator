import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import chromatism from "chromatism"

import withStyle from "../../hoc/withStyle"

import Name from "../../components/name/name"
import ImportWrapper from "../../components/import-data/wrapper"
import ColorPickers from "../../components/color-pickers/container"

const BRIGHTNESS_REDUCTION_STEP = 4

import "./settings.scss"

class Settings extends Component {
  render() {
    const { style, } = this.props
    let brightness = 0
    const reduceBrightness = () => {
      brightness = brightness + BRIGHTNESS_REDUCTION_STEP
      const backgroundColor = chromatism.brightness(brightness, style.backgroundColor).hex
      return {
        color: style.color,
        backgroundColor,
      }
    }

    return (
      <div className="row settings">
        <div className="col-xs-12 pulse pulse-small">
          <div className="box" style={reduceBrightness()}>
            <header>
              <label htmlFor="name">Name your federation</label>
            </header>
            <Name />
          </div>
        </div>
        <div className="col-xs-12 pulse pulse-small">
          <div className="box" style={reduceBrightness()}>
            <ColorPickers />
          </div>
        </div>
        <div className="col-xs-12 pulse pulse-small">
          <div className="box" style={reduceBrightness()}>
            <ImportWrapper />
          </div>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func,
  style: PropTypes.object,
}

export const enhance = compose(
  withStyle //
)

export default enhance(Settings)
