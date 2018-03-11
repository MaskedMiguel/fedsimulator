import React from "react"
import PropTypes from "prop-types"

import getDataState from "./get-data-state"

import "./healthbar.scss"

const Healthbar = ({ percent = 20, }) => (
  <div className="healthbar">
    <div className="percent" data-state={getDataState(percent)} style={{ width: `${percent}%`, }} />
  </div>
)

Healthbar.displayName = "Healthbar"

Healthbar.propTypes = {
  percent: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
}

export default Healthbar
