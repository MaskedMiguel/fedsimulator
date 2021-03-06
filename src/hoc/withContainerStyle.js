import { connect } from "react-redux"
import { compose } from "recompose"

export const withStyle = compose(
  connect(state => ({
    style: state.style.container,
  }))
)

export default withStyle
