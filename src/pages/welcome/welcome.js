import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Flash from "react-reveal/Flash"

import Social from "../../components/social"
import Settings from "../settings/settings"

import "./welcome.scss"

const gameReadyStyle = {
  backgroundColor: "black",
  color: "white",
}

const WelcomePage = ({ gameReady = false, }) => (
  <div className="welcome">
    <header className="center-xs">
      FedSimulator.com is a web based wrestling match & federation simulator with tools to manage the roster, brands and championships
    </header>
    <br />
    <Choose>
      <When condition={gameReady}>
        <Flash duration={1200}>
          <Link to="/dashboard">
            <div style={gameReadyStyle} className="bar center-xs pulse cursor-pointer">
              Game ready! Go to your dashboard and start simulating!
            </div>
          </Link>
        </Flash>
      </When>
      <Otherwise>
        <header className="center-xs">Name your federation and import some data below to start!</header>
      </Otherwise>
    </Choose>
    <br />
    <Settings />
    <br />
    <footer style={gameReadyStyle} className="bar center-xs pulse">
      <Social />
    </footer>
  </div>
)

WelcomePage.propTypes = {
  style: PropTypes.object,
  gameReady: PropTypes.bool,
}

export default WelcomePage
