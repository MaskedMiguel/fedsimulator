import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import "./segments.scss"

class Segments extends PureComponent {
  render() {
    return (
      <div className="segments">
        {this.props.segments.map((segment, key) => {
          const { width, value, name, } = segment
          const style = Object.assign({}, segment.style, { width: width + "%", })
          return (
            <span key={key} style={style} className="segment pulse">
              <span className="name">{name}</span>
              <span className="amount">{value.toLocaleString()}</span>
            </span>
          )
        })}
      </div>
    )
  }
}

Segments.propTypes = {
  segments: PropTypes.array,
}

Segments.defaultProps = {
  segments: [],
}

Segments.displayName = "Segments"

export default Segments
