import { compose, branch, renderComponent } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash.orderby"
import pickProps from "../../../hoc/pickProps"

import withRoster from "../../../hoc/withRoster"
import EmptyRoster from "../../../components/empty-roster"
import Dashboard from "./dashboard"

const isVisible = (item, { rank, brandId, male, }) => item.rank === rank && item.male === male && item.brandId === brandId

export default compose(
  withRoster,
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster)),
  connect(state => {
    let { championships, roster: wrestlers, } = state
    const { brandId, male, wrestlerId, } = state.game
    const wrestler = wrestlers.find(item => item.id === wrestlerId)

    if (wrestler) {
      const filter = { rank: wrestler.rank, brandId, male, }

      championships = championships.filter(item => isVisible(item, filter))
      wrestlers = wrestlers.filter(item => isVisible(item, filter))
      wrestlers = orderBy(wrestlers, "points")
    }

    return {
      wrestler,
      wrestlers,
      championships,
    }
  }),
  pickProps(["wrestler", "wrestlers", "championships",])
)(Dashboard)
