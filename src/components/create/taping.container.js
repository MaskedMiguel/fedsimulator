import { compose, withHandlers, withState } from "recompose"
import { connect } from "react-redux"

import Create from "./create"

import { createTaping } from "../../actions/tapings"

const minLengthForCreate = 2

export default compose(
  withState("name", "updateName", props => props.name),
  connect(null, dispatch => ({
    createTaping: taping => dispatch(createTaping(taping)),
  })),
  withHandlers({
    updateName: props => event => {
      props.updateName(event.target.value)

      if (event.key === "Enter" && props.name && props.name.length > minLengthForCreate) {
        props.createTaping({ name: props.name, })
        props.updateName("")
      }
    },
  })
)(Create)
