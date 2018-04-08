import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Healthbar from "../../components/healthbar/healthbar"

const BoutWrestler = ({ name = "", health = 100, loser = false, winner = false, }) => (
  <div className={classnames("item", { red: loser, }, { gold: winner, })}>
    <div className="name">{name}</div>
    <Healthbar percent={health} />
  </div>
)

BoutWrestler.displayName = "BoutWrestler"

BoutWrestler.propTypes = {
  name: PropTypes.string,
  health: PropTypes.number,
  winner: PropTypes.bool,
  loser: PropTypes.bool,
}

export default BoutWrestler
