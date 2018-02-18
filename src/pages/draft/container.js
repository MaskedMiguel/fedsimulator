import { updateWrestler } from "../../actions/roster"
import { compose, withHandlers, branch, renderComponent } from "recompose"

import withRoster from "../../hoc/withRoster"
import withBrands from "../../hoc/withBrands"
import withStyle from "../../hoc/withStyle"

import EmptyRoster from "../../components/empty-roster.js"
import Draft from "./draft"

export const handlers = {
  onDrop: props => (brandId, drop) => {
    const id = drop.wrestler

    props.dispatch(updateWrestler({ brandId, id, }))
  },
}

export const enhance = compose(
  withBrands,
  withStyle,
  withRoster,
  withHandlers(handlers),
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster))
)

export default enhance(Draft)
