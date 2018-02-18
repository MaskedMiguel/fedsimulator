import React from "react"
import { compose } from "recompose"
import { connect } from "react-redux"

import { updateGame } from "../../../actions/game"

import Labels from "../../../components/labels/labels"

const enhance = compose(
  connect(
    state => ({
      labels: state.brands,
      highlighted: state.game.brandId,
    }),
    dispatch => ({
      onClick: brandId => dispatch(updateGame({ brandId, })),
    })
  )
)

export default enhance(Labels)
