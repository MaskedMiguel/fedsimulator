import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const StyleBrands = ({ styleInline, }) => {
  return <style dangerouslySetInnerHTML={{ __html: styleInline, }} />
}

StyleBrands.defaultProps = {
  styleInline: "",
}

StyleBrands.propTypes = {
  styleInline: PropTypes.string,
}

export default connect(state => ({
  styleInline: state.brands.reduce(
    (prevVal, item) =>
      prevVal +
      ` .${item.id} .ribbon span, .${item.id} .points, .${item.id}.taping {
          background-color: ${item.backgroundColor};
          color: ${item.color};
        }

        .${item.id} .trophy {
          color: ${item.backgroundColor};
        }
        `,
    ""
  ),
}))(StyleBrands)
