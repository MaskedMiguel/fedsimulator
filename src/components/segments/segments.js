import React from "react"
import PropTypes from "prop-types"

import "./segments.scss"

const Segments = ({ segments = [], }) => (
  <div className="segments">
    {segments.map((segment, key) => {
      const { width, value, name, color, backgroundColor, } = segment
      const style = Object.assign({}, { color, backgroundColor, }, { width: width + "%", })
      return (
        <div key={key} style={style} className="segment pulse">
          <span className="name">{name}</span>
          <span className="amount">&nbsp;-&nbsp;{value.toLocaleString()}</span>
        </div>
      )
    })}
  </div>
)

Segments.propTypes = {
  segments: PropTypes.array,
}

export default Segments
