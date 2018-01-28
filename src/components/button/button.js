import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./button.scss"

const NOOP = () => {}

const Button = ({
  value = "",
  children = {},
  classes = "",
  onClick = NOOP,
  style = {},
}) => (
  <button
    style={style}
    type="submit"
    tabIndex="0"
    className={classnames("btn", classes)}
    onKeyPress={onClick}
    onClick={onClick}>
    {value ? value : children}
  </button>
)

Button.defaultProps = {
  value: "",
  classes: "",
  onClick: NOOP,
  style: {},
}

Button.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
}
export default Button
