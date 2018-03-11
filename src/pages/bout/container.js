import { compose, withProps, lifecycle } from "recompose"
import { connect } from "react-redux"

import withBout from "../../hoc/withBout"
import { hitMoveInMatch } from "../../actions/matches"
import Bout from "./bout"
import { SPEED_PER_MOVE } from "../../constants/game"

const propsMapper = props => ({
  ...props.bout,
})

const enhance = compose(
  withBout,
  withProps(propsMapper),
  connect(null),
  lifecycle({
    clearInterval() {
      clearInterval(this._interval)
    },
    componentWillMount() {
      this.setUpInterval()
    },
    componentWillUnmount() {
      this.clearInterval()
    },
    componentWillReceiveProps() {
      this.setUpInterval()
    },
    setUpInterval() {
      const { id, wrestlers, simulated, } = this.props
      this.clearInterval()

      if (!simulated) {
        this._interval = setInterval(() => {
          this.props.dispatch(hitMoveInMatch({ wrestlers, id, }))
        }, SPEED_PER_MOVE)
      }
    },
  })
)

export default enhance(Bout)
