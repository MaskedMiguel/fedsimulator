import React from "react"
import { Link } from "react-router"
import PropTypes from "prop-types"

import { Icon } from "../../components/icons"
import Social from "../../components/social"

import "./welcome.scss"

const NOOP = () => {}

const WelcomePage = ({ generateFederation = NOOP, }) => (
  <section className="page welcome">
    <div className="items collection">
      <Link tabIndex="0" to="/name">
        <div className="item highlight pulse">
          <Icon icon="plus" /> I'll build this company from the ground up, dammit
        </div>
      </Link>
      <div className="item highlight pulse" onClick={generateFederation}>
        <Icon icon="play" /> This is an invasion, create everything for me
      </div>
    </div>
    <footer>
      <Social />
    </footer>
  </section>
)

WelcomePage.propTypes = {
  generateFederation: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default WelcomePage
