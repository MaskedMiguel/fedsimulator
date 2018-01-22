import { connect } from "react-redux"
import { compose } from "recompose"

export const withStyle = compose(
  connect(state => ({
    roster: state.roster,
  }))
)

export default withStyle
