import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Wrestler from "../wrestler/wrestler"

import "./champions.scss"

export const Champions = ({ champions, championships, }) => (
  <div className="row champions">
    {championships.map(championship => {
      const champion = champions.find(item => item.championshipId === championship.id)
      const secondChampion = championship.tag ? champions.find(item => item.championshipId === championship.id && item.id !== champion.id) : null

      return !champion ? null : (
        <div key={championship.id} className="col-xs shadow pulse highlight" style={championship.style}>
          <header>{championship.name}</header>
          <Wrestler wrestler={champion} canDrag={false} />
          <If condition={secondChampion}>
            <Wrestler wrestler={secondChampion} canDrag={false} />
          </If>
        </div>
      )
    })}
  </div>
)

Champions.displayName = "Champions"

Champions.propTypes = {
  champions: PropTypes.array.isRequired,
  championships: PropTypes.array.isRequired,
}

export default connect(state => ({
  champions: state.roster.filter(item => item.championshipId),
  championships: state.championships,
}))(Champions)
