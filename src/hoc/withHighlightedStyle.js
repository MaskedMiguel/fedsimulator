import { connect } from "react-redux"
import { compose } from "recompose"

export const withHighlightedStyle = compose(
  connect(state => ({
    style: state.style.highlighted,
  }))
)

export default withHighlightedStyle
