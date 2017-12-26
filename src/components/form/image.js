import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Dropzone from "react-dropzone"

import "./image.scss"

class Image extends PureComponent {
  onDrop = files => {
    const file = files[0]
    const reader = new FileReader()

    reader.onload = evt => {
      const value = evt.target.result

      this.props.onChange(this.props.name, value)
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { value, label, } = this.props

    return (
      <Dropzone className="image-dropzone dropzone" multiple={false} accept={"image/*"} onDrop={this.onDrop}>
        <div>
          <label tabIndex="0" className="dropzone__label">
            {label}
          </label>
        </div>
        <If condition={value}>
          <div>
            <img className="dropzone__image" src={value} />
          </div>
        </If>
      </Dropzone>
    )
  }
}

Image.defaultProps = {
  maxImageHeight: 200,
  maxImageWidth: 200,
  label: "Drop image files here",
  value: "",
}

Image.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxImageWidth: PropTypes.number.isRequired,
  maxImageHeight: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}

export default Image
