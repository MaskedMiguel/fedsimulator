import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { updateName } from "../../actions/game"
import Input from "../form/input"

import "./name.scss"

export class Name extends Component {
  handleChange = event => {
    const name = String(event.target.value.toUpperCase())

    this.props.dispatch(updateName(name))
  }

  render() {
    const { name } = this.props

    return (
      <span className="name-input">
        <Input
          value={name}
          name="name"
          onChange={this.handleChange}
          label=""
          placeholder="WWE, NXT, ROH, GFW, TNA"
        />
      </span>
    )
  }
}

Name.displayName = "Name"

Name.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
}

export default connect(state => ({
  name: state.game.name,
}))(Name)
