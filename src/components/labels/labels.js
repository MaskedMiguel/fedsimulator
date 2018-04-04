import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./labels.scss"

const NOOP = () => {}

export const Label = ({ color = "", backgroundColor = "", id = "", active = false, onClick = NOOP, name = "", }) => (
  <span
    tabIndex="0"
    onKeyPress={() => onClick(id)}
    onClick={() => onClick(id)}
    className={classnames({ active: active, }, "shadow", "pulse", "label", "title")}
    style={{ color, backgroundColor, }}>
    {name}
  </span>
)

export const Labels = ({ highlighted, onClick = NOOP, labels = [], }) => (
  <div className="labels" tabIndex="0">
    {labels.map(label => <Label onKeyPress={onClick} onClick={onClick} active={label.id === highlighted} key={label.id} {...label} />)}
  </div>
)

Labels.propTypes = {
  highlighted: PropTypes.any,
  labels: PropTypes.array,
  onClick: PropTypes.func,
}

Label.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.any,
  name: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default Labels
