import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Row = ({ children = "", classes = "", style = {}, }) => {
  return (
    <div style={style} className={classnames("row", classes)}>
      <div className="col-xs">
        <div className="box">{children}</div>
      </div>
    </div>
  )
}

Row.displayName = "Row"

Row.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
}

export default Row
