import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./button.scss"

const NOOP = () => {}

const Button = ({ autoFocus = false, value = "", children = "", classes = "", onClick = NOOP, style = {}, }) => (
  <button
    style={style}
    autoFocus={autoFocus}
    type="submit"
    tabIndex="0"
    className={classnames("btn", "shadow", classes)}
    onKeyPress={onClick}
    onClick={onClick}>
    {value ? value : children}
  </button>
)

Button.propTypes = {
  autoFocus: PropTypes.any,
  children: PropTypes.any,
  value: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.array,]),
  onClick: PropTypes.func,
  style: PropTypes.object,
}
export default Button
