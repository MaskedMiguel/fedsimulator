import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "./welcome.scss"
import "../../stylesheets/base.scss"

const GameLayout = ({ children = "", classnames = "", }) => (
  <div id="page-container" className={classNames(classnames, ["welcome", "page-container", "no-select",])}>
    <main>{children}</main>
  </div>
)

GameLayout.displayName = "GameLayout"

GameLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
}

GameLayout.defaultProps = {
  classnames: "",
}

export default GameLayout
