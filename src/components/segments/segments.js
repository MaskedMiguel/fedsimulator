import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import "./segments.scss"

class Segments extends PureComponent {
  render() {
    return (
      <div className="segments" style={{ width: "100%", }}>
        {this.props.segments.map((segment, key) => {
          return (
            <span key={key} style={segment.style} className="segment">
              <span className="name">{segment.name}</span>
              <span className="amount">{segment.value.toLocaleString()}</span>
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
