import React, { Component } from "react"
import PropTypes from "prop-types"
import Dropzone from "react-dropzone"

import "./image.scss"

const noop = () => {}

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = { value: props.formData }
  }

  onChange = files => {
    const file = files[0]
    const reader = new FileReader()

    reader.onload = evt => {
      const value = evt.target.result

      this.setState({ value })
      this.props.onChange(value)
    }

    reader.readAsDataURL(file)
  }

  componentWillReceiveProps(nextProps) {
    let value = String(nextProps.formData)

    if (value.length < 100) {
      value = null
    }
    this.setState({ value })
  }

  render() {
    return (
      <Dropzone className="formImage" multiple={false} accept={"image/*"} onDrop={this.onChange}>
        {this.state.value ? (
          <label className="control-label">
            <img src={this.state.value} />
          </label>
        ) : (
          <h3> ❕ Click here to add an image or drop an image here</h3>
        )}
      </Dropzone>
    )
  }
}

Image.defaultProps = {
  formData: null,
  onChange: noop,
}

Image.propTypes = {
  formData: PropTypes.string,
  onChange: PropTypes.func,
}

export default Image
