import { compose } from "recompose"
import { connect } from "react-redux"

import withStyle from "../../hoc/withHighlightedStyle"
import withShows from "../../hoc/withShows"

import { deleteShow, resetShows } from "../../actions/shows"
import { CONFIRM_RESET } from "../../constants/confirmations"

import Shows from "./shows"

const enhance = compose(
  connect(null, dispatch => ({
    onDelete: id => dispatch(deleteShow(id)),
    onReset: () => {
      if (confirm(CONFIRM_RESET)) {
        dispatch(resetShows())
      }
    },
  })),
  withStyle,
  withShows //
)

export default enhance(Shows)
