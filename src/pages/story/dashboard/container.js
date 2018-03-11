import { compose, branch, renderComponent } from "recompose"
import orderBy from "lodash.orderby"
import { connect } from "react-redux"

import withRoster from "../../../hoc/withRoster.js"

import EmptyRoster from "../../../components/empty-roster.js"
import Dashboard from "./dashboard"

export default compose(
  withRoster,
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster)),
  connect(state => ({
    championships: state.championships,
    rankedItems: orderBy(state.roster.filter(wrestler => wrestler.male === state.game.male), "points", "desc"),
    game: state.game,
    brandId: state.game.brandId,
    male: state.game.male,
  }))
)(Dashboard)
