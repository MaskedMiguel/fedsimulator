import React from "react"
import { compose } from "recompose"
import classNames from "classnames"
import PropTypes from "prop-types"

import withStyle from "../../hoc/withStyle"

import "./welcome.scss"
import "../../stylesheets/base.scss"

const GameLayout = ({ children = "", classnames = "", style = {}, }) => (
  <div id="page-container" style={style.container} className={classNames(classnames, ["welcome", "page-container", "no-select",])}>
    <main>{children}</main>
  </div>
)

GameLayout.displayName = "GameLayout"

GameLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
  style: PropTypes.object,
}

GameLayout.defaultProps = {
  classnames: "",
  style: {},
}

const enhance = compose(withStyle)

export default enhance(GameLayout)
