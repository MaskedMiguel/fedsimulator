import PropTypes from "prop-types"
import { compose, setPropTypes, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash.orderby"

import Wrestlers from "./wrestlers"

export const mappedPropTypes = {
  brandId: PropTypes.oneOfType([PropTypes.null, PropTypes.string]),
  collection: PropTypes.array,
  onClick: PropTypes.func,
  canDrag: PropTypes.bool,
}

export const propsMapper = props => {
  let newRoster = Object.assign([], props.collection)

  if (props.brandId) {
    newRoster = newRoster.filter(item => item.brandId === props.brandId)
  }

  newRoster = orderBy(newRoster, ["championshipId", "points"], ["asc", "desc"])

  return {
    collection: newRoster,
  }
}

export const defaultStoreState = state => ({
  collection: state.roster,
})

export const enhance = compose(connect(defaultStoreState), setPropTypes(mappedPropTypes), withProps(propsMapper))

export default enhance(Wrestlers)
