import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import StyleBrands from "../style-brands"
import Nav from "../../components/nav/container"

import "./site.scss"
import "../../stylesheets/base.scss"

const SiteLayout = ({ children = "", classnames = "", style = {}, name = "Fed Simulator", links = [], }) => {
  return (
    <div id="page-container" style={style.container} className={classNames(classnames, ["site", "page-container", "no-select",])}>
      <main>
        <aside>
          <Nav name={name} tabIndex="0" links={links} style={style.highlighted} modifier="main" />
        </aside>
        {children}
      </main>
      <StyleBrands />
    </div>
  )
}

SiteLayout.displayName = "SiteLayout"

SiteLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  invertedStyle: PropTypes.object,
  links: PropTypes.array,
}

SiteLayout.defaultProps = {
  name: "Fed Simulator",
  classnames: "",
}

export default SiteLayout
