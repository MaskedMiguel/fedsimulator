import { compose, branch, renderComponent } from "recompose"
import orderBy from "lodash.orderby"
import { connect } from "react-redux"

import withRoster from "../../hoc/withRoster"

import EmptyRoster from "../../components/empty-roster"
import Dashboard from "./dashboard"

export default compose(
  withRoster,
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster)),
  connect(state => ({
    championships: state.championships,
    rankedMaleWrestlers: orderBy(state.roster.filter(wrestler => wrestler.male), "points", "desc"),
    rankedFemaleWrestlers: orderBy(state.roster.filter(wrestler => !wrestler.male), "points", "desc"),
    ...state.game,
    style: state.style.highlighted,
  }))
)(Dashboard)
