import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose } from "recompose"
import chromatism from "chromatism"

import withRoster from "../../hoc/withRoster"
import withBrands from "../../hoc/withBrands"
import withStyle from "../../hoc/withHighlightedStyle"

import { updateWrestler, deleteWrestler } from "../../actions/roster"

import Collection from "./collection"

const NOOP = () => {}

class WrestlersContainer extends Component {
  onChangeName = (wrestler, event) => {
    const { dispatch, } = this.props
    const name = event.currentTarget.value

    wrestler = Object.assign({}, wrestler, { name, })

    dispatch(updateWrestler(wrestler))
  }

  onChangeBrand = (wrestler, event) => {
    const { dispatch, } = this.props
    const brandId = event.currentTarget.value

    wrestler = Object.assign({}, wrestler, { brandId, })

    dispatch(updateWrestler(wrestler))
  }

  onChangeGender = wrestler => {
    const { dispatch, } = this.props
    const male = !wrestler.male

    wrestler = Object.assign({}, wrestler, { male, })

    dispatch(updateWrestler(wrestler))
  }

  onDelete = id => {
    const { dispatch, } = this.props

    this.setState({
      id: false,
    })
    dispatch(deleteWrestler(id))
  }

  render() {
    let { style, roster, brands, } = this.props

    return (
      <Collection
        onDelete={this.onDelete}
        onChangeName={this.onChangeName}
        onChangeColor={this.onChangeColor}
        onChangeGender={this.onChangeGender}
        onChangeBackgroundColor={this.onChangeBackgroundColor}
        onChangeBrand={this.onChangeBrand}
        brands={brands}
        canUpdateBrand={true}
        canUpdateColors={false}
        canUpdateGender={true}
        canDelete={true}
        canUpdateName={true}
        collection={roster}
        stripe={true}
        tabIndex="0"
      />
    )
  }
}

WrestlersContainer.defaultProps = {
  brands: [],
  collection: [],
  dispatch: NOOP,
  roster: [],
  style: {},
}

WrestlersContainer.propTypes = {
  brands: PropTypes.array,
  collection: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  roster: PropTypes.array,
  style: PropTypes.object,
}

export const enhance = compose(withBrands, withRoster, withStyle)

export default enhance(WrestlersContainer)
