import React, { Component } from "react"
import { connect } from "react-redux"

import Lightbox from "../lightbox"
import Button from "../button/withLightStyle"
import HeaderOne from "../header/header"
import { fetchData, importData } from "../../actions/data"
import { Tick } from "../icons"

import "./import-data.scss"

const API_ENDPOINT = "/defaults.json"

class ImportData extends Component {
  state = {
    importComplete: false,
    title: null,
  }

  componentDidMount() {
    this.props.dispatch(fetchData(API_ENDPOINT))
  }

  onImport({ title, type, payload }) {
    const callback = () => this.importFinished()

    this.props.dispatch(importData({ type, payload, callback }))

    this.setState({
      title,
    })
  }

  importFinished = () => {
    this.setState({
      importComplete: true,
    })
  }

  onClose = () => {
    this.setState({
      importComplete: false,
      title: null,
    })
  }

  render() {
    const { title, importComplete } = this.state
    const { data } = this.props.data

    if (!data) {
      return null
    }

    return (
      <div>
        <Lightbox show={importComplete} onClose={this.onClose}>
          <Tick /> "{title}" complete!
        </Lightbox>
        <ul className="import-data">
          {data.map(({ title, type, payload }) => {
            return (
              <li key={title}>
                <Button onClick={() => this.onImport({ title, type, payload })}>
                  {title} ({payload.length})
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  data: state.data,
}))(ImportData)
