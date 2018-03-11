import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import Bout from "../../components/bout/bout"

import "./bout.scss"

const BoutPage = ({ teams = [], title = "Debut Match", }) => (
  <div className="bout center-xs middle-xs">
    <Fade top duration={700}>
      <header className="item">{title}</header>
    </Fade>
    <If condition={Object.keys(teams).length > 0}>
      <Bout teams={teams} />
    </If>
  </div>
)

BoutPage.propTypes = {
  title: PropTypes.string,
  teams: PropTypes.object,
}

export default BoutPage
