import { connect } from "react-redux"
import { compose } from "recompose"

export const withBouts = compose(
  connect(state => ({
    bouts: state.matches,
  }))
)

export default withBouts
