import React from "react"
import PropTypes from "prop-types"

import { Droppable } from "react-drag-and-drop"
import Wrestlers from "../../components/wrestlers/container"
import Create from "../../components/create/brand.container"
import Row from "../../components/row"

import { ADD_ITEM } from "../../constants/confirmations"

import "./draft.scss"

const NOOP = () => {}

const DraftPage = ({ brands = [], style = {}, onDrop = NOOP, }) => (
  <div className="draft">
    <Choose>
      <When condition={brands.length > 1}>
        <div className="brands">
          <div className="brand sidelined">
            <img className="temp" width="100%" src="/images/draft.jpg" />
            <Droppable types={["wrestler",]} classes="shadow" onDrop={event => onDrop(null, event)}>
              <Wrestlers brandId={null} />
            </Droppable>
          </div>
          {brands.map(brand => {
            const { backgroundColor, color, id: brandId, } = brand
            const style = { color, backgroundColor, }

            return (
              <div key={brandId} style={style} className="brand">
                <Row classes="middle-xs center-xs">{brand.name}</Row>
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
