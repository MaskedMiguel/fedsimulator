import React from "react"
import PropTypes from "prop-types"
import chromatism from "chromatism"
import classnames from "classnames"

import "./rainbow.scss"

const noop = () => {}
const defaultStyle = { backgroundColor: "#fff", color: "#000", }

const shade = (index, { color, backgroundColor, }) => ({
  color,
  backgroundColor: chromatism.hue(index * 1.2, backgroundColor).hex,
})

const Rainbow = ({ children = "", }) => {
  return <div className="rainbow">{children}</div>
}

const Item = ({ index = 0, onClick = noop, classes = "", children = "", style = defaultStyle, }) => {
  const borderBottom = { borderBottom: `1px solid ${chromatism.shade(index * 3, style.backgroundColor).hex}`, }
  return (
    <div className="row stripe pulse" style={borderBottom}>
      <div className="col-xs" style={shade(index, style)}>
        <div className={classnames("box", classes)} onClick={onClick}>
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
