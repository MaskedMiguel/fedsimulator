import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetchData, importData } from "../../actions/data"
import { Tick } from "../icons"

import Escape from "../../hoc/escape"
import Lightbox from "../lightbox"

import "./importer.scss"

const API_ENDPOINT = "/defaults.json"

class Importer extends Component {
  state = {
    importComplete: false,
    title: null,
  }

  componentDidMount() {
    this.props.dispatch(fetchData(API_ENDPOINT))
  }

  onImportAll = () => {
    if (this.props.collection.data) {
      this.props.collection.data.forEach(props => {
        this.onImport(props)
      })
      this.setState({
        importComplete: true,
        title: "Import everything",
      })
    }
  }

  onImport = ({ title, type, payload, }) => {
    const callback = () => this.importFinished()

    this.props.dispatch(importData({ type, payload, callback, }))

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
    const importAllStyle = { backgroundColor: "black", color: "white", }
    const { title, importComplete, } = this.state
    const { data, } = this.props.collection

    if (!data) {
      return <div>Loading...</div>
    }

    return (
      <div className="importer">
        <Escape onEscape={this.onClose}>
          <Lightbox isVisible={importComplete} onClose={this.onClose}>
            <Tick /> {title} complete!
          </Lightbox>
        </Escape>
        <div className="row center-xs">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box inner" onClick={this.onImportAll} style={importAllStyle}>
              Import all (recommended)
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(({ title, type, payload, style, }) => {
            return (
              <div
                key={title}
                className="shadow pulse inner col-lg-4 col-md-4 col-sm-4 col-xs-12 middle-xs center-xs"
                onClick={() => this.onImport({ title, type, payload, })}>
                <div className="box" style={style}>
                  {title} ({payload.length})
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Importer.propTypes = {
  dispatch: PropTypes.func,
  collection: PropTypes.any,
}

export default connect(state => ({
  collection: state.data,
}))(Importer)
