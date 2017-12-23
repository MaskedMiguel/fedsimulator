import React from "react"
import PropTypes from "prop-types"

import Wrestlers from "../../components/wrestlers/container"
import { Winner, Loser } from "../../components/winner/winner"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"
import Button from "../../components/button/button"
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
      <div className="row center-xs">
        <div className="col-xs-12 col-lg-8">
          <div className="box">
            <HeaderOne>
              Create a Match
              <span tabIndex="0" className="tools">
                <Randomise onClick={onRandomise} />
                <Reset onClick={onReset} />
              </span>
            </HeaderOne>
            <Match currentMatch={currentMatch} />
            <br />
            <If condition={numberOfWrestlers > 1}>
              <Button tabIndex="0" value="Simulate Match" onClick={onSimulateMatch} />
            </If>
            <If condition={winner.name && loser.name}>
              <br />
              <Winner {...winner} />
              <br />
              <Loser {...loser} />
            </If>
          </div>
        </div>
        <div className="col-lg 4 col-xs-12">
          <Wrestlers onClick={onWrestlerClick} style={style} />
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
