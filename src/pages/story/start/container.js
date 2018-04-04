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
  const { brandId, } = game

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
      props.onStartGame({ brandId, name, })
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
    onStartGame: ({ name, brandId, }) => {
      const id = getId()
      const image =
        "data:image/png;base64,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"
      const wrestler = Object.assign({}, schema, { name, id, brandId, image, })

      dispatch(createWrestler(wrestler))
      dispatch(updateGame({ started: true, wrestlerId: id, }))
    },
  })),
  withProps(mappedProps),
  lifecycle(lifecycleMapper)
)

export default enhance(Start)
