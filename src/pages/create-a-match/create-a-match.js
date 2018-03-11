import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Wrestlers from "../../components/wrestlers/container"
import { Winner, Loser } from "../../components/winner/winner"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"
import Button from "../../components/button/button"

import "../../components/form/input.scss"
import "./create-a-match.scss"

const inputStyle = {
  backgroundColor: "transparent",
  color: "currentColor",
  padding: 0,
  width: "auto",
}

const NOOP = () => {}

const CreateAMatch = ({
  currentMatch = null,
  loser = null,
  onReset = NOOP,
  onRandomise = NOOP,
  onSimulateMatch = NOOP,
  onWrestlerClick = NOOP,
  style = {},
  winner = null,
  numberOfWrestlers = 0,
}) => (
  <div className="create-a-match">
    <form onSubmit={onSimulateMatch}>
      <HeaderOne>
        <input style={inputStyle} defaultValue="Create a Match" />
        <span tabIndex={0} className="tools">
          <Button value="Randomise" onClick={onRandomise} />&nbsp;
          <Button value="Reset" onClick={onReset} classes="btn-bad" />
        </span>
      </HeaderOne>
      <div className="row">
        <div className="col-xs-12 col-lg-8 center-xs middle-xs">
          <div className={classnames("box", { hasWinner: winner, })}>
            <Match currentMatch={currentMatch} />
            <Choose>
              <When condition={winner && loser}>
                <Winner {...winner} />
                <br />
                <Loser {...loser} />
              </When>
              <When condition={numberOfWrestlers > 1}>
                <Button tabIndex={0} value="Simulate match" onClick={onSimulateMatch} />
              </When>
            </Choose>
          </div>
          <br />
        </div>
        <div className="col-xs-12 col-lg-4">
          <div className="box">
            <Wrestlers onClick={onWrestlerClick} style={style} />
          </div>
        </div>
      </div>
    </form>
  </div>
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
