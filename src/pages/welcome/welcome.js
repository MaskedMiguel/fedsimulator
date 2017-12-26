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
      <div className="item">
        FedSimulator.com is a web based wrestling match & federation simulator with tools to manage the roster, brands and championships
      </div>
      <Link tabIndex="0" to="/name">
        <div className="item highlight pulse">
          <Icon icon="plus" /> I'll build this company from the ground up, dammit!
        </div>
      </Link>
      <div className="item highlight pulse" onClick={generateFederation}>
        <Icon icon="play" /> This is an invasion, create everything for me! (recommended)
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
