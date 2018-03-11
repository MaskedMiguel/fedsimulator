import React from "react"
import PropTypes from "prop-types"

import HeaderOne from "../../components/header/header"
import Create from "../../components/create/championship.container.js"
import Collection from "../../components/collection/championships.container"
import Button from "../../components/button/button"

import "./championships.scss"

const NOOP = () => {}

const Championships = ({ onClear = NOOP, }) => (
  <div className="manage-championships">
    <HeaderOne>
      Manage Championships
      <span tabIndex="0" className="tools">
        <Button value="Delete all" onClick={onClear} classes="btn-bad" />
      </span>
    </HeaderOne>
    <Create />
    <Collection />
  </div>
)

Championships.propTypes = {
  onClear: PropTypes.func,
}

export default Championships
