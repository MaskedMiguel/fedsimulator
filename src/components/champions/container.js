import React from "react"
import { connect } from "react-redux"
import { mapProps, compose } from "recompose"

import Champions from "./champions"

const enhance = compose(
  connect(state => ({
    roster: state.roster.filter(item => item.championshipId),
  })),
  mapProps(props => {
    let { championships, roster, } = props

    championships = championships.map(championship => {
      championship.champion = roster.find(item => item.championshipId === championship.id)

      return championship
    })

    return {
      championships,
    }
  })
)

export default enhance(Champions)
