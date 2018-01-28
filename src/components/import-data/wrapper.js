import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import ImportData from "./import-data"
import HeaderOne from "../header/header"

class Data extends Component {
  render() {
    const { totals, style } = this.props

    return (
      <div>
        <HeaderOne>Import data</HeaderOne>
        <div className="row">
          <div className="col-xs highlight" style={style}>
            <header>{totals.roster} wrestlers</header>
          </div>
          <div className="col-xs highlight" style={style}>
            <header>{totals.championships} championships</header>
          </div>
          <div className="col-xs highlight" style={style}>
            <header>{totals.brands} brands</header>
          </div>
        </div>
        <br />
        <ImportData />
      </div>
    )
  }
}

export const enhance = compose(
  connect(state => ({
    style: state.style,
    totals: {
      championships: state.championships.length,
      roster: state.roster.length,
      brands: state.brands.length,
    },
  })),
)

export default enhance(Data)
