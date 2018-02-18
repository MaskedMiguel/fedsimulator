import { connect } from "react-redux"
import { compose } from "recompose"

export const withTapings = compose(
  connect(state => ({
    tapings: state.tapings,
  }))
)

export default withTapings
