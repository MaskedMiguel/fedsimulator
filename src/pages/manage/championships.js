import { compose, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash/orderBy"

import Form from "../../components/forms/championship"
import Manage from "./container"

import { deleteChampionship, updateChampionship as update, createChampionship as create, resetChampionships as reset } from "../../actions/champions"
import { CONFIRM_RESET, CONFIRM_DELETE } from "../../constants/confirmations"

const enhance = compose(
  connect(
    state => ({
      collection: orderBy(state.championships, "rank", "desc"),
    }),
    dispatch => ({
      onUpdate: item => dispatch(update(item)),
      onCreate: item => dispatch(create(item)),
      onDelete: id => {
        if (confirm(CONFIRM_DELETE)) {
          dispatch(deleteChampionship(id))
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
    title: "Manage Championships",
    Form,
  }))
)

export default enhance(Manage)
