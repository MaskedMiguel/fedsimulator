import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"

import { getId } from "../../models/model.helper"
import { createMatch } from "../../actions/matches"

class CreateBout extends Component {
  constructor(props) {
    super(props)

    this.state = { id: null, }
  }

  componentWillMount() {
    this.id = getId()

    this.props.onCreate({ id: this.id, })
  }

  componentWillReceiveProps(nextProps) {
    const { history, returnUrl, matches, } = nextProps
    const bout = matches.find(bout => bout.id === this.id)

    if (bout && bout.id) {
      history.replace(`/${returnUrl}/${this.id}`)
    }
  }

  render() {
    return null
  }
}

CreateBout.displayName = "CreateBout"

CreateBout.propsTypes = {
  onCreate: PropTypes.func,
  returnUrl: PropTypes.string,
  matches: PropTypes.array,
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      matches: state.matches,
    }),
    dispatch => ({
      onCreate: id => dispatch(createMatch(id)),
    })
  )
)

export default enhance(CreateBout)
