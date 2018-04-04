import { connect } from "react-redux"
import { compose } from "recompose"

export const withShows = compose(
  connect(state => ({
    shows: state.shows,
  }))
)

export default withShows
