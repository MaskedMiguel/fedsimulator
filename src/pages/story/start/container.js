import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import withName from "./name.container"
import withGame from "../../../hoc/withGame"
import withStyle from "../../../hoc/withHighlightedStyle"
import withRoster from "../../../hoc/withRoster"

import { getId } from "../../../models/model.helper"
import { schema } from "../../../models/wrestler.model"
import { updateGame } from "../../../actions/game"
import { createWrestler } from "../../../actions/roster"
import { CURRENCY } from "../../../constants/game"

import Start from "./start"

const lifecycleMapper = {
  componentWillMount() {
    if (this.props.game.started) {
      this.redirect()
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.game.started) {
      this.redirect()
    }
  },
  redirect() {
    this.props.history.push("/story/calendar")
  },
}

const mappedProps = props => {
  const { game, name, } = props
  let canStart,
    roster = Object.assign([], props.roster)

  if (game.male !== null) {
    roster = roster.filter(item => item.male === game.male)
  }

  if (game.brandId !== null) {
    roster = roster.filter(item => item.brandId === game.brandId)
  }

  if (name !== "" && roster.length > 0 && game.brandId !== null && game.male !== null) {
    canStart = true
  }

  const newProps = {
    onStart: () => {
      props.onStartGame(name)
    },
    ...props,
    canStart,
    roster,
    budget: `${CURRENCY}${props.game.budget}`,
  }

  return newProps
}

const enhance = compose(
  withRouter,
  withGame,
  withStyle,
  withRoster,
  withName,
  connect(null, dispatch => ({
    onStartGame: name => {
      const id = getId()
      const wrestler = Object.assign({}, schema, { name, id, })

      dispatch(createWrestler(wrestler))
      dispatch(updateGame({ started: true, wrestlerId: id, }))
    },
  })),
  withProps(mappedProps),
  lifecycle(lifecycleMapper)
)

export default enhance(Start)
