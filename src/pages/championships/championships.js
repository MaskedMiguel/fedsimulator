import React from "react"
import PropTypes from "prop-types"

import HeaderOne from "../../components/header/header"
import Create from "../../components/create/championship.container.js"
import Collection from "../../components/collection/championships.container"
import { Reset } from "../../components/icons"

import "./championships.scss"

const NOOP = () => {}

const Championships = ({ onClear = NOOP, }) => (
  <section className="page manage-championships">
    <HeaderOne>
      Manage Championships
      <span tabIndex="0" className="tools">
        <Reset onClick={onClear} />
      </span>
    </HeaderOne>
    <Create />
    <Collection />
  </section>
)

Championships.propTypes = {
  onClear: PropTypes.func,
}

export default Championships
