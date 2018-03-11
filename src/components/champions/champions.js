import React from "react"
import PropTypes from "prop-types"

import Wrestler from "../wrestler/wrestler"

export const Champions = ({ championships = [], }) =>
  championships.map(championship => {
    const { champion, } = championship
    return !champion ? null : (
      <div key={championship.id} className="shadow pulse highlight" style={championship.style}>
        <header>{championship.name}</header>
        <Wrestler wrestler={champion} canDrag={false} />
      </div>
    )
  })

Champions.displayName = "Champions"

Champions.propTypes = {
  championships: PropTypes.array.isRequired,
}

export default Champions
