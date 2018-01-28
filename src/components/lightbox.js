import React, { Component } from "react"
import PropTypes from "prop-types"

import Button from "./button/withDarkStyle"

class LightBox extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.9)",
      padding: "2rem",
      zIndex: 200,
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: 5,
      maxWidth: 500,
      margin: "0 auto",
      padding: 30,
    }

    const footerStyle = {
      marginTop: "1rem",
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div style={footerStyle} className="footer">
            <Button onClick={this.props.onClose}>Close</Button>
          </div>
        </div>
      </div>
    )
  }
}

LightBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
}

export default LightBox
