import React, { Component } from "react"
import { compose } from "recompose"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { resetRoster } from "../../actions/roster"
import { resetChampionships } from "../../actions/champions"
import { resetBrands } from "../../actions/brands"
import { resetTapings } from "../../actions/tapings"

import { Icon, Reset } from "../icons"
import ImportData from "./import-data"

class Data extends Component {
  onResetRoster = () => this.props.dispatch(resetRoster())
  onResetChampionships = () => this.props.dispatch(resetChampionships())
  onResetBrands = () => this.props.dispatch(resetBrands())
  onResetTapings = () => this.props.dispatch(resetTapings())

  render() {
    const { totals, style, } = this.props
    const columns = "col-xs-6 col-md-6 col-md-3 col-lg-3 center-xs middle-xs"

    return (
      <div>
        <div className="row">
          <div className={columns} style={style}>
            <div className="box">
              <header>
                <Reset onClick={this.onResetRoster} /> <Icon icon="users" /> {totals.roster} wrestlers
              </header>
            </div>
          </div>
          <div className={columns} style={style}>
            <div className="box">
              <header>
                <Reset onClick={this.onResetChampionships} /> <Icon icon="trophy" /> {totals.championships} championships
              </header>
            </div>
          </div>
          <div className={columns} style={style}>
            <div className="box">
              <header>
                <Reset onClick={this.onResetBrands} /> <Icon icon="tv" /> {totals.brands} brands
              </header>
            </div>
          </div>
          <div className={columns} style={style}>
            <div className="box">
              <header>
                <Reset onClick={this.onResetTapings} /> <Icon icon="film" /> {totals.tapings} tapings
              </header>
            </div>
          </div>
        </div>
        <br />
        <ImportData />
      </div>
    )
  }
}

Data.propTypes = {
  totals: PropTypes.object,
  style: PropTypes.object,
}

export const enhance = compose(
  connect(state => ({
    style: state.style,
    totals: {
      championships: state.championships.length,
      roster: state.roster.length,
      brands: state.brands.length,
      tapings: state.tapings.length,
    },
  }))
)

export default enhance(Data)
