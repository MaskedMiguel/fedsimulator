import PropTypes from "prop-types"
import { compose, withStateHandlers, setPropTypes, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash.orderby"

import Wrestlers from "./wrestlers"

export const mappedPropTypes = {
  brandId: PropTypes.oneOfType([PropTypes.null, PropTypes.string,]),
  collection: PropTypes.array,
  onClick: PropTypes.func,
  canDrag: PropTypes.bool,
}

export const propsMapper = props => {
  const { searchText, collection, brandId, } = props
  let newRoster = Object.assign([], collection)

  if (brandId || brandId === null) {
    newRoster = newRoster.filter(item => item.brandId === brandId)
  }

  if (searchText) {
    newRoster = newRoster.filter(item => item.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1)
  }

  newRoster = orderBy(newRoster, ["championshipId", "points",], ["asc", "desc",])

  return {
    collection: newRoster,
  }
}

const defaultSearchState = ""
const defaultStoreState = state => ({
  collection: state.roster,
})

const onSearch = () => action => ({
  searchText: action.target.value,
})

export const enhance = compose(
  connect(defaultStoreState),
  setPropTypes(mappedPropTypes),
  withStateHandlers(defaultSearchState, { onSearch, }),
  withProps(propsMapper) //
)

export default enhance(Wrestlers)
