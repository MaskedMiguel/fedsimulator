import React, { Component } from "react"
import PropTypes from "prop-types"

import Button from "./button/withDarkStyle"

const style = {
  backdrop: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: "2rem",
    zIndex: 200,
  },
  modal: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 5,
    maxWidth: 500,
    margin: "0 auto",
    padding: 30,
  },
  footer: {
    marginTop: "1rem",
  },
}

class LightBox extends Component {
  render() {
    const { children, onClose, show, } = this.props

    if (!show) {
      return null
    }

    return (
      <div className="backdrop" style={style.backdrop}>
        <div className="modal" style={style.modal}>
          {children}
          <div style={style.footer} className="footer">
            <Button autoFocus={true} onClick={onClose}>
              Close
            </Button>
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
