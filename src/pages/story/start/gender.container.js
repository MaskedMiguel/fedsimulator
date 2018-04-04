import React from "react"
import { compose, withProps } from "recompose"
import { connect } from "react-redux"

import { updateGame } from "../../../actions/game"

import Labels from "../../../components/labels/labels"

const labels = [{ id: true, name: "male", backgroundColor: "blue", }, { id: false, name: "female", backgroundColor: "red", },]

const enhance = compose(
  connect(
    state => ({
      highlighted: state.game.male,
    }),
    dispatch => ({
      onClick: male => dispatch(updateGame({ male, })),
    })
  ),
  withProps(props => ({
    labels,
    ...props,
  }))
)

export default enhance(Labels)
