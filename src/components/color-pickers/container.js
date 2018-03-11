import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import ColorPickers from "./color-pickers"
import { updateStyleHex } from "../../actions/style"

class ColorPickersContainer extends Component {
  onChangeBackgroundColor = hex => this.props.dispatch(updateStyleHex(hex))
  shouldComponentUpdate = () => true
  render() {
    const { backgroundColor, color, } = this.props
    return <ColorPickers backgroundColor={backgroundColor} color={color} onChangeBackgroundColor={this.onChangeBackgroundColor} />
  }
}

ColorPickersContainer.displayName = "ColorPickersContainer"

ColorPickersContainer.propTypes = {
  dispatch: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default connect(state => ({
  ...state.style.highlighted,
}))(ColorPickersContainer)
