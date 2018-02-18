import { connect } from "react-redux"
import { compose } from "recompose"

export const withGame = compose(
  connect(({ game }) => ({
    game,
  }))
)

export default withGame
