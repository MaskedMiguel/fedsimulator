import React from "react"
import PropTypes from "prop-types"

import HeaderOne from "../../components/header/header"
import Create from "../../components/create/brand.container.js"
import Collection from "../../components/collection/brands.container"
import Button from "../../components/button/button"

import "./brands.scss"

const NOOP = () => {}

const BrandsPage = ({ onClear = NOOP, }) => (
  <div className="manage-brands">
    <HeaderOne>
      Manage Brands
      <span tabIndex="0" className="tools">
        <Button value="Delete all" onClick={onClear} classes="btn-bad" />
      </span>
    </HeaderOne>
    <Create />
    <Collection />
  </div>
)

BrandsPage.propTypes = {
  onClear: PropTypes.func,
}

export default BrandsPage
