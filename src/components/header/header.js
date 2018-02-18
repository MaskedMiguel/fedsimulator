import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./header.scss"

const Header = ({ style = {}, classes = "", children = undefined, }) => (
  <header style={style} className={classNames(classes, "header")}>
    {children}
  </header>
)

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Header
