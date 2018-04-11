import React from "react"
import classnames from "classnames"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import chromatism from "chromatism"

import "./nav.scss"

const NOOP = () => {}

const Nav = ({ children = "", classes = "", style = {}, isSubMenuOpen = false, toggleSubMenuOpen = NOOP, links = [], }) => (
  <nav className={classnames("nav", classes)} style={style}>
    {children}
    <If condition={links.length > 0}>
      <label htmlFor="menu-toggle" className="nav-toggle" onClick={toggleSubMenuOpen}>
        &equiv;
      </label>
      <div className={classnames({ active: isSubMenuOpen, }, "nav-right", "nav-menu")}>
        <ul>
          {links.map((item, key) => {
            const { url, title, items, } = item
            if (url) {
              return (
                <li key={key}>
                  <NavLink exact className="nav-item cursor-pointer" to={url}>
                    {title}
                  </NavLink>
                </li>
              )
            } else {
              return (
                <li key={key}>
                  <a className="nav-item cursor-pointer">▾&nbsp;&nbsp;{title}</a>
                  <ul style={style}>
                    {items.map(subItem => {
                      const { url, title, } = subItem
                      return (
                        <li key={url}>
                          <NavLink exact className="nav-item pointer" to={url}>
                            {title}
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </If>
  </nav>
)

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
