import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"

import { getId } from "../../models/model.helper"
import { createShow as create } from "../../actions/shows"

class CreateShow extends Component {
  constructor(props) {
    super(props)

    this.state = { id: null, }
  }

  componentWillMount() {
    this.id = getId()

    this.props.onCreate({ id: this.id, })
  }

  componentWillReceiveProps(nextProps) {
    const { history, returnUrl, collection, } = nextProps
    const item = collection.find(item => item.id === this.id)

    if (item && item.id) {
      history.replace(`/${returnUrl}/${this.id}`)
    }
  }

  render() {
    return null
  }
}

CreateShow.displayName = "CreateShow"

CreateShow.propsTypes = {
  history: PropTypes.object,
  onCreate: PropTypes.func,
  returnUrl: PropTypes.string,
  collection: PropTypes.array,
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      collection: state.shows,
    }),
    dispatch => ({
      onCreate: id => dispatch(create(id)),
    })
  )
)

export default enhance(CreateShow)
