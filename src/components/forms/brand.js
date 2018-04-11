import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"

import Color from "./ui/color"

import "./forms.scss"

const noop = () => {}
const schema = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", title: "Name", default: "" },
    backgroundColor: {
      type: "string",
      title: "Background color",
      default: "#000000",
    },
    color: {
      type: "string",
      title: "Font color",
      default: "#ffffff",
    },
  },
}
const uiSchema = {
  color: {
    "ui:field": "color",
  },
  backgroundColor: {
    "ui:field": "color",
  },
}

const fields = { color: Color }

const BrandForm = ({ children = "", onSubmit = noop, currentItem = {} }) => (
  <Form schema={schema} fields={fields} uiSchema={uiSchema} formData={currentItem} onSubmit={data => onSubmit(data.formData)}>
    {children}
  </Form>
)

BrandForm.propTypes = {
  children: PropTypes.any,
  currentItem: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default BrandForm
