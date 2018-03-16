import React from "react"
import PropTypes from "prop-types"

import ColorPicker from "../../components/color-pickers/color-picker.container"

const SettingsTheme = ({ style = {}, }) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="box" style={style}>
        <header>
          <label htmlFor="name">Select your theming</label>
        </header>
        <ColorPicker />
      </div>
    </div>
  </div>
)

SettingsTheme.displayName = "SettingsImporter"

SettingsTheme.propTypes = {
  style: PropTypes.object,
}

export default SettingsTheme
