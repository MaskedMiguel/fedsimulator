import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import PropTypes from "prop-types"
import { firebaseConnect, isLoaded, toJS } from "react-redux-firebase"

import Wrestler from "../wrestler/wrestler"

import "./champions.scss"

export const Champions = ({ champions, championships, }) => {
  console.log(isLoaded(champions, championships), toJS(champions))
  return (
    <div className="row champions">
      {championships.map(championship => {
        const champion = champions.find(item => item.championshipId === championship.id)
        const secondChampion = championship.tag ? champions.find(item => item.championshipId === championship.id && item.id !== champion.id) : null

        return !champion ? null : (
          <div key={championship.id} className="col-xs pulse champion" style={championship.style}>
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
}

Champions.displayName = "Champions"

Champions.propTypes = {
  champions: PropTypes.array.isRequired,
  championships: PropTypes.array.isRequired,
  firebase: PropTypes.object,
}

export default compose(
  firebaseConnect(["federation",]),
  connect(state => {
    console.log(state)
    return {
      champions: state.firebase.data.federation.roster.filter(item => item.championshipId),
      championships: state.firebase.data.federation.championships,
    }
  })
)(Champions)
