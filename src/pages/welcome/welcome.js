import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Flash from "react-reveal/Flash"

import Social from "../../components/social"

import SettingsName from "../settings/name"
import SettingsImporter from "../settings/importer"

import "./welcome.scss"

const gameReadyStyle = {
  backgroundColor: "black",
  color: "white",
}

const WelcomePage = ({ gameReady = false, style = {}, }) => (
  <div className="welcome">
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
    <div className="box" style={style}>
      <SettingsName style={style} />
    </div>
    <br />
    <div className="box" style={style}>
      <SettingsImporter style={style} />
    </div>
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
