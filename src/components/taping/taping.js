import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Taping = ({ brandId = null, name = "", color = "", backgroundColor = "", }) => (
  <div style={{ color, backgroundColor, }} className={classnames(brandId, "taping")}>
    {name}
  </div>
)

Taping.propTypes = {
  brandId: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}
export default Taping
