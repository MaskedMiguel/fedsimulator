import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { toggleLight, toggleDark } from "../actions/style"

const NOOP = () => {}

export const ToggleTheme = ({
  style = {},
  onToggleDark = NOOP,
  onToggleLight = NOOP,
}) => (
  <span>
    <Choose>
      <When condition={style.light}>
        <a onClick={onToggleDark}>
          <i className="icon fa far fa-lightbulb" style={{ color: "black" }} />
        </a>
      </When>
      <Otherwise>
        <a onClick={onToggleLight}>
          <i className="icon fa far fa-lightbulb" style={{ color: "white" }} />
        </a>
      </Otherwise>
    </Choose>
  </span>
)

export const enhance = compose(
  connect(
    state => ({
      style: state.style,
    }),
    dispatch => ({
      onToggleDark: () => dispatch(toggleDark()),
      onToggleLight: () => dispatch(toggleLight()),
    }),
  ),
)

export default enhance(ToggleTheme)
