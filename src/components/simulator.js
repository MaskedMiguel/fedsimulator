import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Slider from "./form/slider"

import { simulateRandomMatches } from "../actions/matches"
import { updateGameSimulation } from "../actions/game"

const NOOP = () => {}

class Simulator extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

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
        Simulations ({this.state.counter.toLocaleString("en")})
        <Slider max={70} value={this.props.simulationSpeed} onChange={this.onChange} />
      </div>
    )
  }

  startSimulations = () => {
    if (this.props.simulationSpeed > 0) {
      const counter = Number(this.state.counter) + Number(this.props.simulationSpeed)

      this.setState({ counter, })
      this.props.dispatch(simulateRandomMatches(this.props.simulationSpeed))
    }
  }

  startInterval = () => {
    this._interval = setInterval(this.startSimulations, 350)
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
  simulationSpeed: state.game.simulationSpeed,
}))(Simulator)
