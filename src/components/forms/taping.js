import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"
import { compose } from "recompose"

import Color from "./ui/color"
import withBrands from "../../hoc/withBrands"

import "./forms.scss"

const noop = () => {}
const schema = {
  type: "object",
  required: ["name",],
  properties: {
    name: {
      type: "string",
      title: "Name",
      default: "",
    },
    brandId: {
      title: "Brand",
      type: "string",
    },
    repeat: { type: "boolean", title: "Weekly?", default: false, },
    month: {
      type: "integer",
      title: "Month Number",
      default: 1,
      minimum: 1,
      maximum: 12,
    },
    day: {
      "ui:widget": "range",
      type: "integer",
      title: "Day Number (less than seven for weekly)",
      default: 1,
      minimum: 1,
      maximum: 31,
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
  name: {
    "ui:placeholder": "e.g Raw, Thunder, Main Event",
  },
  month: {
    "ui:widget": "range",
  },
  day: {
    "ui:widget": "range",
  },
  color: {
    "ui:field": "color",
  },
  backgroundColor: {
    "ui:field": "color",
  },
}

const fields = { color: Color, }

const TapingForm = ({ children = "", brands = [], onSubmit = noop, currentItem = {}, }) => {
  schema.properties.brandId.enum = brands.map(item => item.id)
  schema.properties.brandId.enumNames = brands.map(item => item.name)

  return (
    <Form schema={schema} fields={fields} uiSchema={uiSchema} formData={currentItem} onSubmit={data => onSubmit(data.formData)}>
      {children}
    </Form>
  )
}

TapingForm.propTypes = {
  children: PropTypes.any,
  brands: PropTypes.array,
  onSubmit: PropTypes.func,
  currentItem: PropTypes.object,
}

const enhance = compose(withBrands)

export default enhance(TapingForm)
