import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import ColorPicker from "./color-picker"
import { updateStyleHex } from "../../actions/style"

class ColorPickerContainer extends Component {
  onChangeBackgroundColor = hex => {
    this.props.dispatch(updateStyleHex(hex))
  }

  shouldComponentUpdate() {
    return true
  }

  render() {
    const { backgroundColor, } = this.props
    return (
      <span className="color-picker-only shadow">
        <ColorPicker backgroundColor={backgroundColor} onChange={this.onChangeBackgroundColor} />
      </span>
    )
  }
}

ColorPickerContainer.displayName = "ColorPickerContainer"

ColorPickerContainer.propTypes = {
  dispatch: PropTypes.func,
  backgroundColor: PropTypes.string,
}

export default connect(state => ({
  ...state.style.highlighted,
}))(ColorPickerContainer)
