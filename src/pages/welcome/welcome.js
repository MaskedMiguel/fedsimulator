import React from "react"
import { Link } from "react-router"
import PropTypes from "prop-types"

import Social from "../../components/social"
import Settings from "../settings/settings"

import "./welcome.scss"

const GameReady = ({ style = {}, }) => (
  <Link to={"/dashboard"}>
    <div style={style} className="gameReady center-xs">
      Go to your dashboard and start simulating!
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
    <header className="center-xs">Name your federation below to start!</header>
    <br />
    <Settings />
    <If condition={gameReady}>
      <GameReady style={style} />
    </If>
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
