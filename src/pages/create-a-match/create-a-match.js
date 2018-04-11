import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Wrestlers from "../../components/wrestlers/container"
import { Winner, Loser } from "../../components/winner/winner"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"
import Button from "../../components/button/button"

import "./create-a-match.scss"

const noop = () => {}

const CreateAMatch = ({
  currentMatch = null,
  onResetMatch = noop,
  onRandomise = noop,
  onSimulateMatch = noop,
  onWrestlerClick = noop,
  loser = null,
  winner = null,
  numberOfWrestlers = 0,
  style = {},
}) => (
  <div className="create-a-match">
    <form onSubmit={onSimulateMatch}>
      <HeaderOne>
        Create A Match
        <span className="tools">
          <If condition={numberOfWrestlers > 1}>
            <Button tabIndex={0} value="Simulate" classes="btn-info" onClick={onSimulateMatch} />&nbsp;
          </If>
          <Button value="Randomise" onClick={onRandomise} classes="btn-info" />&nbsp;
          <Button value="Reset" onClick={onResetMatch} classes="btn-bad" />
        </span>
      </HeaderOne>
      <div className="row">
        <div className="col-xs-12 col-lg-8 center-xs middle-xs">
          <div className={classnames("box", { hasWinner: winner, })}>
            <Match currentMatch={currentMatch} />
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
  onResetMatch: PropTypes.func,
  onSimulateMatch: PropTypes.func,
  onWrestlerClick: PropTypes.func,
  style: PropTypes.object,
  winner: PropTypes.object,
  numberOfWrestlers: PropTypes.number,
}

export default CreateAMatch
