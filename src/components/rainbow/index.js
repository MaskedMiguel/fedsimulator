import React from "react"
import PropTypes from "prop-types"
import chromatism from "chromatism"
import classnames from "classnames"

import "./rainbow.scss"

const noop = () => {}
const defaultStyle = { backgroundColor: "#fff", color: "#000", }

const getStyle = (index, { color, backgroundColor, }) => ({
  color,
  backgroundColor: chromatism.hue(index, backgroundColor).hex,
})

const Rainbow = ({ children = "", }) => <div className="rainbow">{children}</div>

const Item = ({ index = 0, onClick = noop, classes = "", children = "", style = defaultStyle, }) => {
  return (
    <div className="row stripe pulse" style={getStyle(index, style)}>
      <div className="col-xs">
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
