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

Rainbow.propTypes = {
  children: PropTypes.any,
}

const Item = ({
  index = 0,
  onClick = noop,
  topClasses = ["stripe", "pulse",],
  innerClasses = ["middle-xs", "between-xs",],
  children = "",
  style = defaultStyle,
}) => {
  return (
    <div className={classnames("row", "cursor-pointer", topClasses)} style={getStyle(index, style)}>
      <div className="col-xs">
        <div className={classnames("box", innerClasses)} onClick={onClick}>
          {children}
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  topClasses: PropTypes.array,
  innerClasses: PropTypes.array,
  children: PropTypes.any,
  index: PropTypes.number,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export { Rainbow, Item }
