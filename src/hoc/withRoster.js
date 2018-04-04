import { connect } from "react-redux"
import { compose } from "recompose"

export const withRoster = compose(
  connect(state => ({
    roster: state.roster,
  }))
)

export default withRoster
