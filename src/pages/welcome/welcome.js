import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Flash } from "animate-components"

import Social from "../../components/social"
import Settings from "../settings/settings"

import "./welcome.scss"

const gameReadyStyle = {
  backgroundColor: "black",
  color: "white",
}
const GameReady = ({ style = gameReadyStyle, }) => (
  <Link to="/dashboard">
    <br />
    <div style={gameReadyStyle} className="gameReady center-xs">
      Game ready! Go to your dashboard and start simulating!
    </div>
  </Link>
)

GameReady.propTypes = {
  style: PropTypes.object,
}

const WelcomePage = ({ style = {}, gameReady = false, }) => (
  <section className="page welcome">
    <header className="center-xs">
      FedSimulator.com is a web based wrestling match & federation simulator with tools to manage the roster, brands and championships
    </header>
    <br />
    <Choose>
      <When condition={gameReady}>
        <Flash>
          <GameReady style={style} />
        </Flash>
      </When>
      <Otherwise>
        <header className="center-xs">Name your federation and import some data below to start!</header>
      </Otherwise>
    </Choose>
    <br />
    <Settings />
    <br />
    <footer className="center-xs pulse">
      <Social />
    </footer>
  </section>
)

WelcomePage.propTypes = {
  style: PropTypes.object,
  gameReady: PropTypes.bool,
}

export default WelcomePage
