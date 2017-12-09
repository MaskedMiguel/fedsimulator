import React from "react"
import PropTypes from "prop-types"

import "./slider.scss"

const NOOP = () => {}

const Slider = ({ min = 0, max = 5000, value = "", onChange = NOOP, }) => <input type="range" min={min} max={max} value={value} onChange={onChange} />

Slider.displayName = "Slider"
Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.any,
  onChange: PropTypes.func,
}
export default Slider
