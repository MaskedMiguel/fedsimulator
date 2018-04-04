import { compose, withHandlers, withState } from "recompose"
import { connect } from "react-redux"

import Create from "./create"

import { createShow } from "../../actions/shows"

const minLengthForCreate = 2

export default compose(
  withState("name", "updateName", props => props.name),
  connect(null, dispatch => ({
    create: item => dispatch(createShow(item)),
  })),
  withHandlers({
    updateName: props => event => {
      props.updateName(event.target.value)

      if (event.key === "Enter" && props.name && props.name.length > minLengthForCreate) {
        props.create({
          name: props.name,
        })
        props.updateName("")
      }
    },
  })
)(Create)
