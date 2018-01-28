import React from "react"
import PropTypes from "prop-types"

import Wrestlers from "../../components/wrestlers/container"
import { Winner, Loser } from "../../components/winner/winner"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"
import Button from "../../components/button/withLightStyle"
import { Reset, Randomise } from "../../components/icons"

import "./create-a-match.scss"

const NOOP = () => {}

const CreateAMatch = ({
  currentMatch = {},
  loser = {},
  onReset = NOOP,
  onRandomise = NOOP,
  onSimulateMatch = NOOP,
  onWrestlerClick = NOOP,
  style = {},
  winner = {},
  numberOfWrestlers = 0,
}) => (
  <section className="page create-a-match">
    <form onSubmit={onSimulateMatch}>
      <HeaderOne>
        Create a Match
        <span tabIndex="0" className="tools">
          <Randomise onClick={onRandomise} />
          <Reset onClick={onReset} />
        </span>
      </HeaderOne>
      <div className="row">
        <div className="col-xs-12 col-lg-8 center-xs middle-xs">
          <div className="box">
            <Match currentMatch={currentMatch} />
            <Choose>
              <When condition={winner.name && loser.name}>
                <Winner {...winner} />
                <br />
                <Loser {...loser} />
                <br />
              </When>
              <When condition={numberOfWrestlers > 1}>
                <Button tabIndex="0" value="Simulate match" onClick={onSimulateMatch} />
              </When>
            </Choose>
          </div>
        </div>
        <div className="col-xs-12 col-lg-4">
          <div className="box">
            <Wrestlers onClick={onWrestlerClick} style={style} />
          </div>
        </div>
      </div>
    </form>
  </section>
)

CreateAMatch.propTypes = {
  currentMatch: PropTypes.object,
  loser: PropTypes.object,
  onRandomise: PropTypes.func,
  onReset: PropTypes.func,
  onSimulateMatch: PropTypes.func,
  onWrestlerClick: PropTypes.func,
  style: PropTypes.object,
  winner: PropTypes.object,
  numberOfWrestlers: PropTypes.number,
}

export default CreateAMatch
