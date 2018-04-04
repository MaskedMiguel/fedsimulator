import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Flip from "react-reveal/Flip"

import "./header.scss"

const Header = ({ style = {}, classes = "", children = undefined, }) => (
  <header style={style} className={classNames(classes, "header")}>
    <Flip top>{children}</Flip>
  </header>
)

Header.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.string,
  children: PropTypes.any,
}

export default Header
