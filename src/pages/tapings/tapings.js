import React from "react"
import PropTypes from "prop-types"

import Create from "../../components/create/taping.container.js"
import HeaderOne from "../../components/header/header"
import Collection from "../../components/collection/tapings.container"
import { Reset } from "../../components/icons"

import "./tapings.scss"

const NOOP = () => {}

const RosterPage = ({ onClear = NOOP }) => {
  return (
    <section className="page tapings">
      <HeaderOne>
        Manage Tapings
        <span tabIndex="0" className="tools">
          <Reset onClick={onClear} title="Clear tapings" />
        </span>
      </HeaderOne>
      <Create />
      <Collection />
    </section>
  )
}

RosterPage.propTypes = {
  onClear: PropTypes.func,
}

export default RosterPage
