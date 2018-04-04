import React, { Component } from "react"
import PropTypes from "prop-types"

import Button from "./button/button"

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
    maxWidth: 500,
    margin: "10% auto",
    padding: 30,
  },
  footer: {
    marginTop: "1rem",
  },
}

const NOOP = () => {}

const LightBox = ({ children = "", onClose = NOOP, canClose = true, isVisible = false, }) => {
  if (!isVisible) return null
  return (
    <div className="backdrop" style={style.backdrop}>
      <div className="modal" style={style.modal}>
        {children}
        {canClose && (
          <div style={style.footer} className="footer">
            <Button autoFocus={true} onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

LightBox.propTypes = {
  canClose: PropTypes.bool,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool,
  children: PropTypes.node,
}

export default LightBox
