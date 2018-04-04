import React from "react"
import PropTypes from "prop-types"

import Champions from "../../../components/champions/container"
import Leaderboard from "../../../components/leaderboard/leaderboard"

import "./dashboard.scss"

export const StoryDashboard = ({ wrestler = {}, championships = [], wrestlers = [], }) => (
  <div className="dashboard">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
        <div className="box">
          <If condition={championships.length > 0}>
            <Champions championships={championships} />
          </If>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
        <div className="box">
          <h3>Rank {wrestler.rank}</h3>
          <Leaderboard wrestlers={wrestlers} activeId={wrestler.id} />
        </div>
      </div>
    </div>
  </div>
)

StoryDashboard.displayName = "StoryDashboard"

StoryDashboard.propTypes = {
  championships: PropTypes.array,
  wrestler: PropTypes.object,
  wrestlers: PropTypes.array,
}

export default StoryDashboard
