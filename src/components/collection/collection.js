import React from "react"
import PropTypes from "prop-types"
import chromatism from "chromatism"
import { compose } from "recompose"
import withStyle from "../../hoc/withHighlightedStyle"

import ColorPickers from "../color-pickers/color-pickers"
import Select from "../form/select"
import Input from "../form/input"
import Button from "../button/button"

import "./collection.scss"

const NOOP = () => {}

const shade = (amount, style) => {
  return {
    color: style.color,
    backgroundColor: chromatism.hue(amount, style.backgroundColor).hex,
  }
}

const clean = (collection, style) => {
  let x = 0
  return (collection = collection.map(item => {
    x++
    let amount = x + 10
    item.style = shade(amount, style)
    return item
  }))
}

export const Collection = ({
  brands = [],
  canDelete = false,
  canUpdateBrand = false,
  canUpdateColors = false,
  canUpdateGender = false,
  canUpdateName = true,
  collection = [],
  onChangeBackgroundColor = NOOP,
  onChangeBrand = NOOP,
  onChangeColor = NOOP,
  onChangeGender = NOOP,
  onChangeName = NOOP,
  onDelete = NOOP,
  style = {},
  stripe = false,
}) => {
  const collectionToLoop = stripe ? clean(collection, style) : collection
  return (
    <div className="collection">
      {collectionToLoop.map(item => {
        let currentStyle = style
        if (item.style) {
          currentStyle = item.style
        }
        return (
          <div key={item.id} className="item row middle-xs pulse shadow pulse-small" style={currentStyle}>
            <If condition={canUpdateColors}>
              <div className="col-xs small">
                <div className="box">
                  <ColorPickers
                    onChangeColor={event => onChangeColor(item, event)}
                    onChangeBackgroundColor={event => onChangeBackgroundColor(item, event)}
                    {...item.style}
                  />
                </div>
              </div>
            </If>
            <If condition={canUpdateName}>
              <div className="col-xs input">
                <div className="box">
                  <Input style={currentStyle} value={item.name} onChange={event => onChangeName(item, event)} />
                </div>
              </div>
            </If>
            <If condition={canUpdateBrand}>
              <div className="col-xs">
                <div className="box">
                  <Select options={brands} value={item.brandId} onChange={event => onChangeBrand(item, event)} />
                </div>
              </div>
            </If>
            <If condition={canUpdateGender}>
              <div className="col-xs small">
                <div className="box">
                  <Button classes="gender" onClick={event => onChangeGender(item, event)} value={item.male ? "Male" : "Female"} />
                </div>
              </div>
            </If>
            <If condition={canDelete}>
              <div className="col-xs end-xs small">
                <div className="box">
                  <Button classes="delete" onClick={() => onDelete(item.id)} value="Delete" />
                </div>
              </div>
            </If>
          </div>
        )
      })}
    </div>
  )
}

Collection.propTypes = {
  brands: PropTypes.array,
  canDelete: PropTypes.bool,
  canUpdateBrand: PropTypes.bool,
  canUpdateColors: PropTypes.bool,
  canUpdateGender: PropTypes.bool,
  canUpdateName: PropTypes.bool,
  canUpdateWrestler: PropTypes.bool,
  collection: PropTypes.array,
  onChangeBackgroundColor: PropTypes.func,
  onChangeBrand: PropTypes.func,
  onChangeColor: PropTypes.func,
  onChangeGender: PropTypes.func,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
  style: PropTypes.object,
  stripe: PropTypes.bool,
}

export const enhance = compose(withStyle)
export default enhance(Collection)
