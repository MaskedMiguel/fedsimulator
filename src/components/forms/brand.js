import React from "react"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"

import "./forms.scss"

const noop = () => {}
const schema = {
  type: "object",
  required: ["name",],
  properties: {
    name: { type: "string", title: "Name", default: "", },
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
  color: {
    "ui:widget": "color",
  },
  backgroundColor: {
    "ui:widget": "color",
  },
}

const BrandForm = ({ children = "", onSubmit = noop, currentItem = {}, }) => (
  <Form schema={schema} uiSchema={uiSchema} formData={currentItem} onSubmit={data => onSubmit(data.formData)}>
    {children}
  </Form>
)

BrandForm.propTypes = {
  children: PropTypes.any,
  currentItem: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default BrandForm
