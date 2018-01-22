import { connect } from "react-redux"
import { compose } from "recompose"

export const withStyle = compose(
  connect(state => ({
    championships: state.championships,
  }))
)

export default withStyle
