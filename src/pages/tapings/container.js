import { compose } from "recompose"
import { connect } from "react-redux"

import withStyle from "../../hoc/withHighlightedStyle.js"

import { resetTapings } from "../../actions/tapings"
import { TAPINGS_CONFIRM_RESET } from "../../constants/confirmations"

import TapingsPage from "./tapings"

export default compose(
  connect(
    state => ({
      tapings: state.tapings,
    }),
    dispatch => ({
      onClear: () => {
        if (confirm(TAPINGS_CONFIRM_RESET)) {
          dispatch(resetTapings())
        }
      },
    })
  ),
  withStyle
)(TapingsPage)
