import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateFederation} from '../actions/federation'

class Name extends Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newState = Object.assign(this.props.federation, this.state)

    this.props.dispatch(updateFederation(newState))
  }

  displayName = 'Name'

  render() {
    return (
      <section className="page name">
        <h1>Name your federation!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">
            Save and decide the size of your federation
          </button>
        </form>
      </section>
    )
  }
}

export default connect(state => ({
  federation: state.federation,
}))(Name)
