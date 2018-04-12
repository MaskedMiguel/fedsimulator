import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Row from "../../components/row"
import Wrestlers from "../../components/wrestlers/container"
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
      <Row classes={classnames({ hasWinner: winner, })}>
        <Match currentMatch={currentMatch} />
      </Row>
      <br />
      <Row>
        <Wrestlers onClick={onWrestlerClick} style={style} />
      </Row>
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
