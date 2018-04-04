import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Wrestler from "../wrestler/wrestler"

import "./leaderboard.scss"

export const Leaderboard = ({ wrestlers = [], activeId = null, }) => (
  <ul className="leaderboard">
    {wrestlers.map((item, key) => {
      const active = item.id === activeId
      return (
        <li key={key} className={classnames({ active, })}>
          #{key + 1} <Wrestler canDrag={false} wrestler={item} highlight={active} />
        </li>
      )
    })}
  </ul>
)

Leaderboard.displayName = "Leaderboard"

Leaderboard.propTypes = {
  activeId: PropTypes.string,
  wrestlers: PropTypes.array,
}

export default Leaderboard
