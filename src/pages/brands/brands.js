import React from "react"
import PropTypes from "prop-types"

import HeaderOne from "../../components/header/header"
import Create from "../../components/create/brand.container.js"
import Collection from "../../components/collection/brands.container"
import { Reset } from "../../components/icons"

import "./brands.scss"

const NOOP = () => {}

const BrandsPage = ({ onClear = NOOP, }) => (
  <section className="page manage-brands">
    <HeaderOne>
      Manage Brands
      <span tabIndex="0" className="tools">
        <Reset onClick={onClear} />
      </span>
    </HeaderOne>
    <Collection />
    <Create />
  </section>
)

BrandsPage.propTypes = {
  onClear: PropTypes.func,
}

export default BrandsPage
