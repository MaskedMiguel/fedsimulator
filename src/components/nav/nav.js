import React from "react"
import classnames from "classnames"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { Icon } from "../icons"

import "./nav.scss"

const NOOP = () => {}

const Nav = ({ style = {}, isSubMenuOpen = false, toggleSubMenuOpen = NOOP, links = [], }) => {
  return (
    <nav className="nav" style={style}>
      <div className="nav-left">
        <h1>
          <Link to="/">Fed Simulator</Link>
        </h1>
      </div>
      <If condition={links.length > 0}>
        <label htmlFor="menu-toggle" className="nav-toggle" onClick={toggleSubMenuOpen}>
          &equiv;
        </label>
        <div className={classnames({ active: isSubMenuOpen, }, "nav-right", "nav-menu")} style={style}>
          {links.map((item, key) => {
            const { url, icon, title, } = item
            return (
              <Link
                className={classnames("nav-item", "pointer", { active: item.active, })}
                key={key}
                style={{ color: style.color, }}
                to={url}
                onClick={toggleSubMenuOpen}
              >
                <Icon icon={icon} style={style} tabIndex={-1} />&nbsp;
                <div tabIndex="1">{title}</div>
              </Link>
            )
          })}
        </div>
      </If>
    </nav>
  )
}

Nav.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  isSubMenuOpen: PropTypes.bool,
  links: PropTypes.array,
  style: PropTypes.object,
  toggleSubMenuOpen: PropTypes.func,
}

export default Nav
