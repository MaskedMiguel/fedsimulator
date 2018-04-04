import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"
import { compose } from "recompose"

import withBrands from "../../hoc/withBrands"

import "./forms.scss"

const noop = () => {}
const schema = {
  type: "object",
  required: ["name",],
  properties: {
    name: { type: "string", title: "Name", default: "", },
    brandId: {
      title: "Brand",
      type: "string",
    },
    male: { type: "boolean", title: "Male", default: true, },
    rank: {
      "ui:widget": "range",
      type: "integer",
      title: "Rank (1 low - 5 high)",
      default: 1,
      minimum: 1,
      maximum: 5,
    },
    backgroundColor: {
      type: "string",
      title: "Background color",
      default: "black",
    },
    color: {
      type: "string",
      title: "Font color",
      default: "white",
    },
  },
}
const uiSchema = {
  rank: {
    "ui:widget": "range",
  },
  color: {
    "ui:widget": "color",
  },
  backgroundColor: {
    "ui:widget": "color",
  },
}

const ChampionshipForm = ({ children = "", brands = [], onSubmit = noop, currentItem = {}, }) => {
  schema.properties.brandId.enum = brands.map(item => item.id)
  schema.properties.brandId.enumNames = brands.map(item => item.name)
  return (
    <Form schema={schema} uiSchema={uiSchema} formData={currentItem} onSubmit={data => onSubmit(data.formData)}>
      {children}
    </Form>
  )
}

ChampionshipForm.propTypes = {
  children: PropTypes.any,
  brands: PropTypes.array,
  onSubmit: PropTypes.func,
  currentItem: PropTypes.object,
}

const enhance = compose(withBrands)

export default enhance(ChampionshipForm)
