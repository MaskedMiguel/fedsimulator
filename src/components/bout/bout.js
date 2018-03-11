import React from "react"
import PropTypes from "prop-types"
import Slide from "react-reveal/Slide"
import Jump from "react-reveal/Jump"
import classnames from "classnames"

import BoutWrestler from "./wrestler"

import "./bout.scss"

const speeds = {
  wrestler: 700,
  versus: 400,
}

export const Bout = ({ teams = [], }) => (
  <div className="single-bout start-xs center-xs">
    {Object.keys(teams).map((teamId, key) => {
      const wrestlers = teams[teamId]
      const isLast = Boolean(key + 1 === Object.keys(teams).length)
      const classes = classnames("team", { multiple: wrestlers.length > 1, })
      const left = key % 2 === 0

      return (
        <div key={teamId}>
          <Slide left={left} right={!left} duration={speeds.wrestler}>
            <div className={classes}>{wrestlers.map(wrestler => <BoutWrestler key={wrestler.id} {...wrestler} />)}</div>
          </Slide>
          <If condition={!isLast}>
            <Jump duration={speeds.versus}>
              <div className="versus">VS</div>
            </Jump>
          </If>
        </div>
      )
    })}
  </div>
)

Bout.propTypes = {
  teams: PropTypes.object,
}
export default Bout
