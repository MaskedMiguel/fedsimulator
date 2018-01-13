import { connect } from "react-redux"
import { updateWrestler } from "../../actions/roster"
import { compose, withHandlers, branch, renderComponent } from "recompose"

import { generateRoster } from "../../actions/roster"
import EmptyRoster from "../../components/empty-roster.js"
import Draft from "./draft"

export const handlers = {
  onDrop: props => (brandId, drop) => {
    const id = drop.wrestler

    props.dispatch(updateWrestler({ brandId, id, }))
  },
  onGenerate: props => () => props.dispatch(generateRoster()),
}

export const enhance = compose(
  connect(state => ({
    brands: state.federation.brands,
    roster: state.federation.roster,
    style: state.style,
  })),
  withHandlers(handlers),
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster))
)

export default enhance(Draft)
