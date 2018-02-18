import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose } from "recompose"

import withTapings from "../../hoc/withTapings"
import withBrands from "../../hoc/withBrands"

import { updateTaping, deleteTaping } from "../../actions/tapings"

import Collection from "./collection"

const NOOP = () => {}

class TapingsContainer extends Component {
  onChangeName = (taping, event) => {
    const { dispatch, } = this.props
    const name = event.currentTarget.value

    taping = Object.assign({}, taping, { name, })

    dispatch(updateTaping(taping))
  }

  onChangeBrand = (taping, event) => {
    const { dispatch, } = this.props
    const brandId = event.currentTarget.value

    taping = Object.assign({}, taping, { brandId, })

    dispatch(updateTaping(taping))
  }

  onDelete = id => {
    const { dispatch, } = this.props

    this.setState({
      id: false,
    })
    dispatch(deleteTaping(id))
  }

  render() {
    let { tapings, brands, } = this.props

    return (
      <Collection
        brands={brands}
        onDelete={this.onDelete}
        onChangeBrand={this.onChangeBrand}
        onChangeName={this.onChangeName}
        canUpdateName={true}
        canUpdateBrand={true}
        canDelete={true}
        collection={tapings}
        stripe={true}
        tabIndex="0"
      />
    )
  }
}

TapingsContainer.defaultProps = {
  brands: [],
  collection: [],
  dispatch: NOOP,
  tapings: [],
}

TapingsContainer.propTypes = {
  brands: PropTypes.array,
  collection: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  tapings: PropTypes.array,
}

export const enhance = compose(withBrands, withTapings)

export default enhance(TapingsContainer)
