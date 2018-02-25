import React from "react"
import { compose, withProps, renderNothing } from "recompose"
import { withRouter } from "react-router"
import { connect } from "react-redux"

import { getId } from "../../models/model.helper"
import withTapings from "../../hoc/withTapings"
import Button from "../../components/button/button"

const propsMapper = props => {
  const id = props.params.id
  const taping = props.tapings.find(item => item.id === id)

  if (id && taping) {
    const { brandId, name, } = taping
    const show = { id: getId(), name, brandId, }
    console.log(show)

    // props.dispatch(createShow(show))
  }
  return {
    taping,
    ...props.game,
  }
}

const enhance = compose(
  connect(null),
  withRouter,
  withTapings,
  withProps(propsMapper), //
  renderNothing,
)

export default enhance()
