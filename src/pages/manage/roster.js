import { compose, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash/orderBy"

import Form from "../../components/forms/wrestler"
import Manage from "./container"

import { deleteWrestler, updateWrestler as update, createWrestler as create, resetRoster as reset } from "../../actions/roster"
import { CONFIRM_RESET, CONFIRM_DELETE } from "../../constants/confirmations"

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
  }))
)

export default enhance(Manage)
