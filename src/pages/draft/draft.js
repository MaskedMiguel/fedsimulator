import React from "react"
import PropTypes from "prop-types"

import { Droppable } from "react-drag-and-drop"
import HeaderOne from "../../components/header/header"
import Wrestlers from "../../components/wrestlers/container"
import Create from "../../components/create/brand.container"

import { Generate } from "../../components/icons"
import { ADD_BRAND_ENTRY } from "../../constants/confirmations"

import "./draft.scss"

const NOOP = () => {}

const darkStyle = style => Object.assign({}, style, { backgroundColor: style.darkBgColor, })

const DraftPage = ({ brands = [], style = {}, onDrop = NOOP, onGenerate = NOOP, }) => (
  <section className="page draft">
    <HeaderOne />
    <If condition={brands.length === 0}>
      <Create placeholder={ADD_BRAND_ENTRY} />
    </If>
    <If condition={brands.length > 0}>
      <div className="brands">
        <div style={darkStyle(style)} className="brand">
          <h3>
            All{" "}
            <span tabIndex="0" className="tools">
              <Generate onClick={onGenerate} title="Generate default roster" />
            </span>
          </h3>
          <Wrestlers style={darkStyle(style)} />
        </div>
        {brands.map(brand => {
          const { style, id: brandId, } = brand
          return (
            <div key={brandId} style={style} className="brand">
              <h3>{brand.name}</h3>
              <Droppable types={["wrestler",]} onDrop={event => onDrop(brandId, event)}>
                <Wrestlers brandId={brandId} style={style} />
              </Droppable>
            </div>
          )
        })}
      </div>
    </If>
  </section>
)

DraftPage.propTypes = {
  brands: PropTypes.array,
  style: PropTypes.object,
  onDrop: PropTypes.func,
  onGenerate: PropTypes.func,
}

export default DraftPage
