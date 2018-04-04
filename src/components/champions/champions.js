import React from "react"
import PropTypes from "prop-types"

import Wrestler from "../wrestler/wrestler"

import "./champions.scss"

export const Champions = ({ championships = [], }) =>
  championships.map(championship => {
    const { champion, backgroundColor, color, } = championship
    return !champion ? null : (
      <div key={championship.id} className="championship shadow pulse highlight" style={{ backgroundColor, color, }}>
        <header tabIndex={0}>
          {championship.name}
          <sup tabIndex={0}>{championship.rank}</sup>
        </header>
        <Wrestler wrestler={champion} canDrag={false} />
      </div>
    )
  })

Champions.displayName = "Champions"

Champions.propTypes = {
  championships: PropTypes.array.isRequired,
}

export default Champions
