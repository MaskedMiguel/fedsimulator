import React from "react"
import PropTypes from "prop-types"
import { compose } from "recompose"

import withStyle from "../../hoc/withHighlightedStyle"
import Team from "./team"

import "./match.scss"

const noop = () => {}

const Teams = ({ style = {}, onAddWrestler = noop, onRemoveWrestler = noop, onSelectWinner = noop, teams = [], }) => {
  const amountOfTeams = Object.keys(teams).length - 1
  return (
    <div className="teams row">
      {Object.keys(teams).map((teamId, key) => {
        const wrestlers = teams[teamId]
        const classes = key > 1 && amountOfTeams === key ? "last" : ""
        return (
          <Team
            classes={classes}
            onDrop={item => onAddWrestler(teamId, item)}
            key={`${teamId}-${key}`}
            teamId={teamId}
            onRemoveWrestler={onRemoveWrestler}
            onSelectWinner={onSelectWinner}
            wrestlers={wrestlers}
            style={style}
          />
        )
      })}
    </div>
  )
}

Teams.propTypes = {
  onAddWrestler: PropTypes.func,
  onRemoveWrestler: PropTypes.func,
  onSelectWinner: PropTypes.func,
  teams: PropTypes.object,
  style: PropTypes.object,
}

const enhance = compose(
  withStyle //
)

export default enhance(Teams)
