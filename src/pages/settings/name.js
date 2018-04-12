import React from "react"
import PropTypes from "prop-types"

import Name from "../../components/name/name"

const SummaryName = ({ style = {}, }) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="box" style={style}>
        <header>
          <label htmlFor="name">❕ Name your federation</label>
        </header>
        <Name />
      </div>
    </div>
  </div>
)

SummaryName.displayName = "Name"

SummaryName.propTypes = {
  style: PropTypes.object,
}

export default SummaryName
