import { connect } from "react-redux"
import { compose } from "recompose"

export const withStyle = compose(
  connect(state => ({
    brands: state.federation.brands,
  }))
)

export default withStyle
