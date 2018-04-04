import React from "react"
import PropTypes from "prop-types"
import chromatism from "chromatism"
import classnames from "classnames"

import "./rainbow.scss"

const noop = () => {}
const defaultStyle = { backgroundColor: "#fff", color: "#000", }

const shade = (index, style) => ({
  color: style.color,
  backgroundColor: chromatism.hue(index + 10, style.backgroundColor).hex,
})

const Rainbow = ({ children = "", }) => {
  return <div className="rainbow">{children}</div>
}

const Item = ({ index = 0, onClick = noop, classes = "", children = "", style = defaultStyle, }) => {
  return (
    <div className="row stripe">
      <div className="col-xs" style={shade(index, style)}>
        <div className={classnames("box", "pulse", classes)} onClick={onClick}>
          {children}
        </div>
      </div>
    </div>
  )
}

Rainbow.propTypes = {
  children: PropTypes.any,
}

Item.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
  index: PropTypes.number,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export { Rainbow, Item }
