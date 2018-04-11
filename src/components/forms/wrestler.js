import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"
import { compose } from "recompose"

import { WRESTLER_MAX_POINTS } from "../../constants/game"
import withChampionships from "../../hoc/withChampionships"
import withBrands from "../../hoc/withBrands"

import "./forms.scss"

const noop = () => {}
const schema = {
  type: "object",
  required: ["name", "points"],
  properties: {
    name: { type: "string", title: "Name", default: "" },
    male: { type: "boolean", title: "Male", default: true },
    brandId: {
      title: "Brand",
      type: "string",
    },
    championshipId: {
      title: "Championship",
      type: "string",
    },
    image: {
      type: "string",
      format: "data-url",
      title: "Image",
    },
    points: {
      type: "integer",
      title: "Points",
      default: 1,
      minimum: 1,
      maximum: WRESTLER_MAX_POINTS,
    },
  },
}

const uiSchema = {
  points: {
    "ui:widget": "range",
  },
}

const WrestlerForm = ({ children = "", brands = [], championships = [], onSubmit = noop, currentItem = {} }) => {
  if (currentItem.brandId === null) {
    currentItem.brandId = ""
  }

  if (currentItem.championshipId === null) {
    currentItem.brandId = ""
  }

  schema.properties.brandId.enum = brands.map(item => item.id)
  schema.properties.brandId.enumNames = brands.map(item => item.name)

  schema.properties.championshipId.enum = championships.map(item => item.id)
  schema.properties.championshipId.enumNames = championships.map(item => item.name)

  return (
    <span>
      {currentItem.image ? <img src={currentItem.image} /> : ""}
      <Form schema={schema} uiSchema={uiSchema} formData={currentItem} onSubmit={data => onSubmit(data.formData)}>
        {children}
      </Form>
    </span>
  )
}

WrestlerForm.propTypes = {
  children: PropTypes.any,
  brands: PropTypes.array,
  championships: PropTypes.array,
  currentItem: PropTypes.object,
  onSubmit: PropTypes.func,
}

const enhance = compose(
  withChampionships,
  withBrands //
)

export default enhance(WrestlerForm)
