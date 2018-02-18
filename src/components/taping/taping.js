import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Taping = ({ brandId = null, name = "", }) => <div className={classnames(brandId, "taping")}>{name}</div>

Taping.propTypes = {
  brandId: PropTypes.string,
  name: PropTypes.string,
}
export default Taping
