import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Lightbox from "../lightbox"
import { fetchData, importData } from "../../actions/data"
import { Tick } from "../icons"
import Button from "../button/button"
import Row from "../row"
import Escape from "../../hoc/escape"

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

  onImport = ({ title, type, payload }) => {
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
    const { data } = this.props.collection

    if (!data) {
      return null
    }

    return (
      <div className="import-data">
        <Escape onEscape={this.onClose}>
          <Lightbox isVisible={importComplete} onClose={this.onClose}>
            <Tick /> {title} complete!
          </Lightbox>
        </Escape>
        <Row classes="center-xs middle-xs">
          <Button onClick={this.onImportAll}>Import all</Button>
        </Row>
        <div className="row">
          {data.map(({ title, type, payload, style }) => {
            return (
              <div
                key={title}
                className="inner shadow pulse col-lg-4 col-md-4 col-sm-4 col-xs-12 middle-xs center-xs"
                onClick={() => this.onImport({ title, type, payload })}>
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

ImportData.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.any,
}

export default connect(state => ({
  collection: state.data,
}))(ImportData)
