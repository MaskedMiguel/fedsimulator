import React from "react"
import classnames from "classnames"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

import "./nav.scss"

const NOOP = () => {}

const Nav = ({ children = "", classes = "", style = {}, isSubMenuOpen = false, toggleSubMenuOpen = NOOP, links = [], }) => {
  return (
    <nav className={classnames("nav", classes)} style={style}>
      {children}
      <If condition={links.length > 0}>
        <label htmlFor="menu-toggle" className="nav-toggle" onClick={toggleSubMenuOpen}>
          &equiv;
        </label>
        <div className={classnames({ active: isSubMenuOpen, }, "nav-right", "nav-menu")} style={style}>
          {links.map((item, key) => {
            const { url, title, } = item
            return (
              <NavLink
                key={key}
                exact
                activeClassName="active"
                className="nav-item pointer"
                style={{ color: style.color, }}
                to={url}
                onClick={toggleSubMenuOpen}>
                <div tabIndex={1}>{title}</div>
              </NavLink>
            )
          })}
        </div>
      </If>
    </nav>
  )
}

Nav.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isSubMenuOpen: PropTypes.bool,
  links: PropTypes.array,
  style: PropTypes.object,
  toggleSubMenuOpen: PropTypes.func,
}

export default Nav
