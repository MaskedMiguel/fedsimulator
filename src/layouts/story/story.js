import React from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import PropTypes from "prop-types"
import { compose } from "recompose"

// import Budget from "../../components/budget/container"
import Nav from "../../components/nav/nav"
import StyleBrands from "../style-brands"
import withStyle from "../../hoc/withStyle"

import links from "./links.json"

import "./story.scss"
import "../../stylesheets/base.scss"

const StoryLayout = ({ children = "", classnames = "", style = {}, }) => {
  return (
    <div id="page-container" style={style.highlighted} className={classNames(classnames, ["story", "page-container", "no-select",])}>
      <main>
        <Nav style={style.container} links={links}>
          <div className="nav-left">
            <h1>
              <NavLink exact to="/">
                Fed Sim
              </NavLink>
            </h1>
          </div>
        </Nav>
        <section className="page">{children}</section>
      </main>
      <StyleBrands />
    </div>
  )
}

StoryLayout.displayName = "StoryLayout"

StoryLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
  style: PropTypes.object,
}

const enhance = compose(withStyle)

export default enhance(StoryLayout)
