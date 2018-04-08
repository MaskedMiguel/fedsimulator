import React from "react"
import { compose, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash/orderBy"

import Wrestler from "../../components/wrestler/wrestler"
import Form from "../../components/forms/wrestler"
import Manage from "./container"

import { deleteWrestler, updateWrestler as update, createWrestler as create, resetRoster as reset } from "../../actions/roster"
import { CONFIRM_RESET, CONFIRM_DELETE } from "../../constants/confirmations"

const Presentation = ({ item, }) => <Wrestler key={item.id} {...item} wrestler={item} />

const enhance = compose(
  connect(
    state => ({
      collection: orderBy(state.roster, "points", "desc"),
    }),
    dispatch => ({
      onUpdate: item => dispatch(update(item)),
      onCreate: item => dispatch(create(item)),
      onDelete: id => {
        if (confirm(CONFIRM_DELETE)) {
          dispatch(deleteWrestler(id))
        }
      },
      onClear: () => {
        if (confirm(CONFIRM_RESET)) {
          dispatch(reset())
        }
      },
    })
  ),
  withProps(() => ({
    title: "Manage Roster",
    Form,
    Presentation,
  }))
)

export default enhance(Manage)
