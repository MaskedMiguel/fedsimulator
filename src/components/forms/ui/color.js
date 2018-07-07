import React, { Component } from "react"
import PropTypes from "prop-types"
import ColorPicker from "coloreact"

import "./color.scss"

class Color extends Component {
  constructor(props) {
    super(props)

    this.state = { value: props.formData, }
  }

  onChange = ({ hex, }) => {
    const value = String(hex)

    this.setState({ value, })
    this.props.onChange(`#${value}`)
  }

  componentWillReceiveProps(nextProps) {
    const value = String(nextProps.formData)

    this.setState({ value, })
  }

  render() {
    return [
      <label key="label" className="control-label" htmlFor="root_name">
        {this.props.schema.title}
      </label>,
      <div key="formColor" className="formColor">
        <ColorPicker color={this.state.value} onChange={this.onChange} />
      </div>,
    ]
  }
}

export default Color
