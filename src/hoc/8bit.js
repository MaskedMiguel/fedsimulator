import React, { Component } from "react"
import PropTypes from "prop-types"
import eightBit from "8bit"

class Image8Bit extends Component {
  componentDidMount() {
    this._img = new Image()
    this._img.onload = () => {
      if (this.canvas && this._img) {
        eightBit(this.canvas, this._img, this.props.scaleFactor)
        if (this.props.onLoad) this.props.onLoad(this._img)
      }
    }
    this._img.src = this.props.src
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this._img = new Image()
      this._img.onload = () => {
        eightBit(this.canvas, this._img, this.props.scaleFactor)
        if (this.props.onLoad) this.props.onLoad(this._img)
      }
      this._img.src = nextProps.src
      return
    }
    if (this.props.scaleFactor !== nextProps.scaleFactor) {
      eightBit(this.canvas, this._img, nextProps.scaleFactor)
    }
  }

  render() {
    const { src, scaleFactor, ...others } = this.props
    return <canvas {...others} ref={elem => (this.canvas = elem)} />
  }
}

Image8Bit.defaultProps = {
  scaleFactor: 16,
}

Image8Bit.propTypes = {
  src: PropTypes.string.isRequired,
  scaleFactor: PropTypes.number.isRequired,
  onLoad: PropTypes.func,
}

export default Image8Bit
