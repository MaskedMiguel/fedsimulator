import { compose, lifecycle } from "recompose"
import { withRouter } from "react-router"

import withGame from "../../hoc/withGame"

import Dashboard from "./dashboard/container"

const lifecycleMapper = {
  componentWillMount() {
    this.redirect(this.props)
  },
  componentWillReceiveProps(nextProps) {
    this.redirect(nextProps)
  },
  redirect(props) {
    const { game: { started, }, } = props

    if (!started) {
      this.props.history.push("/story/start")
    }
  },
}

const enhance = compose(
  withRouter,
  withGame,
  lifecycle(lifecycleMapper) //
)

export default enhance(Dashboard)
