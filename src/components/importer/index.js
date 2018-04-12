import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetchData, importData } from "../../actions/data"

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

  onImport = ({ title, items, }) => {
    items.forEach(({ type, payload, }) => {
      this.props.dispatch(importData({ type, payload, }))
    })

    this.importFinished()

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
    const { title, importComplete, } = this.state
    const { data, } = this.props.collection

    if (!data) {
      return <div>Loading...</div>
    }

    return (
      <div className="importer">
        <Escape onEscape={this.onClose}>
          <Lightbox isVisible={importComplete} onClose={this.onClose}>
            ✅ {title} complete!
          </Lightbox>
        </Escape>
        <div className="row">
          {data.map(({ title, items, style, }) => {
            return (
              <div
                key={title}

                className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                onClick={() => this.onImport({ title, items, })}>
                <div className="box shadow pulse inner  middle-xs center-xs"	style={style}>
                  {title}
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
