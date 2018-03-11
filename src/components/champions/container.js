import React from "react"
import { connect } from "react-redux"
import { withProps, compose } from "recompose"

import Champions from "./champions"

const enhance = compose(
  connect(state => ({
    champions: state.roster.filter(item => item.championshipId),
    championships: state.championships,
  })),
  withProps(props => {
    let { championships, champions, brandId, male, } = props

    if (brandId !== undefined) {
      championships = championships.filter(item => item.brandId === brandId)
    }

    if (male !== undefined) {
      championships = championships.filter(item => item.male === male)
    }

    championships = championships.map(championship => {
      championship.champion = champions.find(item => item.championshipId === championship.id)

      return championship
    })

    return {
      championships,
    }
  })
)

export default enhance(Champions)
