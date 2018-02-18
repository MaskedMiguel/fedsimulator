import { compose, lifecycle } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import WelcomePage from "./welcome"

export default compose(
  connect(state => ({
    name: state.game.name,
    style: state.style,
    roster: state.roster,
    gameReady: state.roster.length > 0 && state.game.name !== "",
  })),
  withRouter,
  lifecycle({
    componentDidMount() {
      if (this.props.name) {
        this.props.history.push("/dashboard")
      }
    },
  })
)(WelcomePage)
