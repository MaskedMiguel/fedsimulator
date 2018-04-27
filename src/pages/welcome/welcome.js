import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Flash from "react-reveal/Flash"

import SettingsName from "../settings/name"
import SettingsImporter from "../settings/importer"

import "./welcome.scss"

const gameReadyStyle = {
  backgroundColor: "black",
  color: "white",
}

const WelcomePage = ({ gameReady = false, style = {}, }) => (
  <div className="welcome">
    <If condition={gameReady}>
      <Flash duration={1200}>
        <Link to="/dashboard">
          <div style={gameReadyStyle} className="bar center-xs pulse cursor-pointer">
            Game ready! Go to your dashboard and start simulating!
          </div>
        </Link>
        <br />
      </Flash>
    </If>
    <div className="box" style={style}>
      <SettingsName />
      <SettingsImporter />
    </div>
  </div>
)

WelcomePage.propTypes = {
  style: PropTypes.object,
  gameReady: PropTypes.bool,
}

export default WelcomePage
