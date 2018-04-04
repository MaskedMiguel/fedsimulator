import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Form from "react-jsonschema-form"

import { simulateRandomMatch } from "../actions/roster"
import { updateSimulation } from "../actions/simulations"

const noop = () => {}
const schema = {
  type: "integer",
  default: 0,
  minimum: 0,
  maximum: 200,
}
const uiSchema = { "ui:widget": "range", }
const sliderStyle = { height: "1rem", }

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

  onChange = simulationSpeed => {
    this.props.dispatch(
      updateSimulation({
        simulationSpeed,
        simulation: true,
      })
    )
  }

  render() {
    return (
      <div className="simulator">
        <h2>Simulations ({this.props.simulationCount.toLocaleString("en")})</h2>
        <Form style={sliderStyle} schema={schema} uiSchema={uiSchema} formData={this.props.simulationSpeed} onChange={data => this.onChange(data.formData)}>
          <span className="hide" />
        </Form>
      </div>
    )
  }

  startSimulations = () => {
    const { simulationSpeed, } = this.props

    if (simulationSpeed > 0) {
      const { dispatch, roster, championships, } = this.props

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
  championships: PropTypes.array,
  roster: PropTypes.array,
  simulationCount: PropTypes.number,
  simulationSpeed: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
}

Simulator.defaultProps = {
  dispatch: noop,
  simulationCount: PropTypes.number,
  simulationSpeed: 0,
}

export default connect(state => ({
  simulationCount: state.roster.reduce((previousValue, currentValue) => previousValue + currentValue.wins, 0),
  simulationSpeed: state.simulations.simulationSpeed,
  roster: state.roster,
  championships: state.championships,
}))(Simulator)
