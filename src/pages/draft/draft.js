import React from "react"
import PropTypes from "prop-types"

import { Droppable } from "react-drag-and-drop"
import HeaderOne from "../../components/header/header"
import Wrestlers from "../../components/wrestlers/container"
import Create from "../../components/create/brand.container"

import { ADD_ITEM } from "../../constants/confirmations"

import "./draft.scss"

const NOOP = () => {}

const DraftPage = ({ brands = [], style = {}, onDrop = NOOP, }) => (
  <div className="draft">
    <HeaderOne>Draft</HeaderOne>
    <Choose>
      <When condition={brands.length > 1}>
        <div className="brands">
          <div style={style} className="brand">
            <header>All</header>
            <Wrestlers style={style} />
          </div>
          {brands.map(brand => {
            const { backgroundColor, color, id: brandId, } = brand
            const style = { color, backgroundColor, }
            return (
              <div key={brandId} style={style} className="brand pulse">
                <header>{brand.name}</header>
                <Droppable types={["wrestler",]} onDrop={event => onDrop(brandId, event)}>
                  <Wrestlers brandId={brandId} style={style} />
                </Droppable>
              </div>
            )
          })}
        </div>
      </When>
      <Otherwise>
        <Create placeholder={ADD_ITEM} />
      </Otherwise>
    </Choose>
  </div>
)

DraftPage.propTypes = {
  brands: PropTypes.array,
  style: PropTypes.object,
  onDrop: PropTypes.func,
}

export default DraftPage
