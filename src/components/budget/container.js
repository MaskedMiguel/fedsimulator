import { connect } from "react-redux"
import { compose } from "recompose"

import Budget from "./budget"

export default compose(
  connect(state => ({
    budget: state.game.budget,
  }))
)(Budget)
