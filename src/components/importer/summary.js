import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { resetRoster } from "../../actions/roster"
import { resetChampionships } from "../../actions/champions"
import { resetBrands } from "../../actions/brands"
import { resetTapings } from "../../actions/tapings"
import { resetShows } from "../../actions/shows"
import { resetMatches } from "../../actions/matches"

import Button from "../button/button"

class ImportSummary extends Component {
  onResetRoster = () => this.props.dispatch(resetRoster())
  onResetChampionships = () => this.props.dispatch(resetChampionships())
  onResetBrands = () => this.props.dispatch(resetBrands())
  onResetTapings = () => this.props.dispatch(resetTapings())
  onResetShows = () => this.props.dispatch(resetShows())
  onResetMatches = () => this.props.dispatch(resetMatches())

  render() {
    const { totals, } = this.props
    const columns = "col-xs-6 col-sm-2 col-md-2 col-lg-2 center-xs middle-xs pulse"

    return (
      <div className="wrapper">
        <div className="row">
          <div className={columns}>
            <div className="box">
              <header>{totals.roster} wrestlers</header>
              <Button classes="btn-bad" onClick={this.onResetRoster} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.championships} championships</header>
              <Button classes="btn-bad" onClick={this.onResetChampionships} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.brands} brands</header>
              <Button classes="btn-bad" onClick={this.onResetBrands} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.tapings} tapings</header>
              <Button classes="btn-bad" onClick={this.onResetTapings} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.shows} shows</header>
              <Button classes="btn-bad" onClick={this.onResetShows} value="Clear" />
            </div>
          </div>
          <div className={columns}>
            <div className="box">
              <header>{totals.matches} matches</header>
              <Button classes="btn-bad" onClick={this.onResetMatches} value="Clear" />
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
      shows: state.shows.length,
      matches: state.matches.length,
      tapings: state.tapings.length,
    },
  }))
)

export default enhance(ImportSummary)
