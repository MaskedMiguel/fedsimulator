import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Slider from "./form/slider"

import { simulateRandomMatch } from "../actions/roster"
import { updateGameSimulation } from "../actions/game"

const NOOP = () => {}

class Simulator extends PureComponent {
  constructor(props) {
    super(props)

    if (props.simulationSpeed > 0) {
      this.startInterval()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.simulationSpeed > 0) {
      this.clearInterval()
      this.startInterval()
    } else {
      this.clearInterval()
    }
  }

  componentWillUnmount() {
    this.clearInterval()
  }

  onChange = event => {
    const simulationSpeed = event.currentTarget.value

    this.props.dispatch(
      updateGameSimulation({
        simulationSpeed,
        simulation: true,
      })
    )
  }

  render() {
    return (
      <div>
        Simulations ({this.props.simulationCount.toLocaleString("en")})
        <Slider max={70} value={this.props.simulationSpeed} onChange={this.onChange} />
      </div>
    )
  }

  startSimulations = () => {
    const { dispatch, simulationSpeed, roster, championships, } = this.props

    if (simulationSpeed > 0) {
      dispatch(simulateRandomMatch({ roster, championships, }))
    }
  }

  startInterval = () => {
    const speed = 50 - this.props.simulationSpeed * 0.8

    this._interval = setInterval(this.startSimulations, speed)
  }

  clearInterval = () => {
    clearInterval(this._interval)
  }
}

Simulator.displayName = "PageSecondary"

Simulator.propTypes = {
  dispatch: PropTypes.func,
  simulationSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
}

Simulator.defaultProps = {
  dispatch: NOOP,
  simulationSpeed: 0,
}

export default connect(state => ({
  simulationCount: state.roster.reduce((previousValue, currentValue) => previousValue + currentValue.wins, 0),
  simulationSpeed: state.game.simulationSpeed,
  roster: state.roster,
  championships: state.championships,
}))(Simulator)
