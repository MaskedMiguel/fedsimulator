import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import chromatism from "chromatism"

import withStyle from "../../hoc/withStyle"

import Name from "../../components/name/name"
import ImportWrapper from "../../components/import-data/wrapper"
import ColorPicker from "../../components/color-pickers/color-picker.container"

const BRIGHTNESS_REDUCTION_STEP = 4

import "./settings.scss"

class Settings extends Component {
  render() {
    const { style, } = this.props
    let brightness = 0
    const reduceBrightness = () => {
      brightness = brightness + BRIGHTNESS_REDUCTION_STEP
      const backgroundColor = chromatism.brightness(brightness, style.highlighted.backgroundColor).hex
      return {
        color: style.highlighted.color,
        backgroundColor,
      }
    }

    return (
      <div className="settings">
        <div className="row " style={reduceBrightness()}>
          <div className="col-xs-12 col-md-8 col-sm-8 col-lg-10">
            <div className="box">
              <header>
                <label htmlFor="name">Name your federation</label>
              </header>
              <Name />
            </div>
          </div>
          <div className="col-xs-12 col-md-4 col-sm-4 col-lg-2">
            <div className="box">
              <header>
                <label htmlFor="name">Select your theming</label>
              </header>
              <ColorPicker />
            </div>
          </div>
        </div>
        <div className="row" style={reduceBrightness()}>
          <div className="col-xs-12">
            <div className="box">
              <ImportWrapper />
            </div>
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
