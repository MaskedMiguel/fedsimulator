import { connect } from "react-redux"
import { compose } from "recompose"

export const withStyle = compose(
  connect(state => ({
    championships: state.federation.championships,
  }))
)

export default withStyle
