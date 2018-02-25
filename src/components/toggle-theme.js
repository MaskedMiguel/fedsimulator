import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"

import { toggleLight, toggleDark } from "../actions/style"
import Button from "../components/button/button"

const NOOP = () => {}

export const ToggleTheme = ({ style = {}, onToggleDark = NOOP, onToggleLight = NOOP, }) => (
  <span>
    <Choose>
      <When condition={style.light}>
        <Button style={{ backgroundColor: "black", }} onClick={onToggleDark}>
          &nbsp;
        </Button>
      </When>
      <Otherwise>
        <Button style={{ backgroundColor: "white", }} onClick={onToggleLight}>
          &nbsp;
        </Button>
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
    })
  )
)

export default enhance(ToggleTheme)
