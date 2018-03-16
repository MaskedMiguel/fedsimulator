import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { resetRoster } from "../../actions/roster"
import { resetChampionships } from "../../actions/champions"
import { resetBrands } from "../../actions/brands"
import { resetTapings } from "../../actions/tapings"

import Button from "../button/button"

class ImportSummary extends Component {
  onResetRoster = () => this.props.dispatch(resetRoster())
  onResetChampionships = () => this.props.dispatch(resetChampionships())
  onResetBrands = () => this.props.dispatch(resetBrands())
  onResetTapings = () => this.props.dispatch(resetTapings())

  render() {
    const { totals, } = this.props
    const columns = "col-xs-6 col-sm-3 col-md-3 col-lg-3 center-xs middle-xs pulse"

    return (
      <div className="wrapper">
        <div className="row">
          <div className={columns}>
            <div className="box">
              <header>{totals.roster} wrestlers</header>
              <Button onClick={this.onResetRoster} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.championships} championships</header>
              <Button onClick={this.onResetChampionships} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.brands} brands</header>
              <Button onClick={this.onResetBrands} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.tapings} tapings</header>
              <Button onClick={this.onResetTapings} value="Clear" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ImportSummary.propTypes = {
  totals: PropTypes.object,
  style: PropTypes.object,
}

export const enhance = compose(
  connect(state => ({
    style: state.style.highlighted,
    totals: {
      championships: state.championships.length,
      roster: state.roster.length,
      brands: state.brands.length,
      tapings: state.tapings.length,
    },
  }))
)

export default enhance(ImportSummary)
