import { connect } from "react-redux"
import { compose } from "recompose"

import Button from "./button"

export default compose(
  connect(state => ({
    style: state.style,
  }))
)(Button)
