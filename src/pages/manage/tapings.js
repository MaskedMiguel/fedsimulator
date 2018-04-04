import { compose, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash/orderBy"

import Form from "../../components/forms/taping"
import Manage from "./container"

import { deleteTaping, updateTaping as update, createTaping as create, resetTapings as reset } from "../../actions/tapings"
import { CONFIRM_RESET, CONFIRM_DELETE } from "../../constants/confirmations"

const enhance = compose(
  connect(
    state => ({
      collection: orderBy(state.tapings, "repeat"),
    }),
    dispatch => ({
      onUpdate: item => dispatch(update(item)),
      onCreate: item => dispatch(create(item)),
      onDelete: id => {
        if (confirm(CONFIRM_DELETE)) {
          dispatch(deleteTaping(id))
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
    title: "Manage Tapings",
    Form,
  }))
)

export default enhance(Manage)
