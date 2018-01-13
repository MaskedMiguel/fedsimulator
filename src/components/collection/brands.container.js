import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"

import withBrands from "../../hoc/withBrands"
import withStyle from "../../hoc/withStyle"

import { updateBrand, deleteBrand } from "../../actions/brands"
import Collection from "./collection"

const NOOP = () => {}

class BrandsContainer extends Component {
  onChangeName = (brand, event) => {
    const { dispatch, } = this.props
    const name = event.currentTarget.value

    brand = Object.assign({}, brand, { name, })

    dispatch(updateBrand(brand))
  }

  onChangeColor = (brand, color) => {
    const { dispatch, } = this.props

    brand.style = Object.assign({}, brand.style, { color, })

    dispatch(updateBrand(brand))
  }

  onChangeBackgroundColor = (brand, backgroundColor) => {
    const { dispatch, } = this.props

    brand.style = Object.assign({}, brand.style, { backgroundColor, })

    dispatch(updateBrand(brand))
  }

  onDelete = id => {
    const { dispatch, } = this.props

    this.setState({
      id: false,
    })
    dispatch(deleteBrand(id))
  }

  render() {
    const { style, brands, } = this.props
    return (
      <Collection
        onDelete={this.onDelete}
        onChangeName={this.onChangeName}
        onChangeColor={this.onChangeColor}
        onChangeBackgroundColor={this.onChangeBackgroundColor}
        canUpdateColors={true}
        canUpdateBrand={false}
        canUpdateGender={false}
        canDelete={true}
        canUpdateName={true}
        collection={brands}
        style={style}
        tabIndex="0"
      />
    )
  }
}

BrandsContainer.defaultProps = {
  brands: [],
  dispatch: NOOP,
  collection: [],
  style: {},
}

BrandsContainer.propTypes = {
  brands: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  collection: PropTypes.array,
  style: PropTypes.object,
}

export const enhance = compose(withBrands, withStyle)

export default enhance(BrandsContainer)
