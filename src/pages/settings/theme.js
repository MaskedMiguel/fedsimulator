import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"
import { compose } from "recompose"
import { connect } from "react-redux"

import { updateStyleHex } from "../../actions/style"

const schema = {
  type: "string",
  title: "Theme",
  default: "white",
}

const uiSchema = {
  "ui:widget": "color",
}

const noop = () => {}

const SettingsTheme = ({ style = {}, hex = "#fff", onChange = noop }) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="box" style={style}>
        <Form schema={schema} uiSchema={uiSchema} formData={hex} onSubmit={data => onChange(data.formData)} />
      </div>
    </div>
  </div>
)

SettingsTheme.displayName = "SettingsImporter"

SettingsTheme.propTypes = {
  style: PropTypes.object,
  hex: PropTypes.string,
  onChange: PropTypes.func,
}

const enhance = compose(
  connect(
    state => ({
      hex: state.style.hex,
    }),
    dispatch => ({
      onChange: hex => dispatch(updateStyleHex(hex)),
    })
  )
)
export default enhance(SettingsTheme)
