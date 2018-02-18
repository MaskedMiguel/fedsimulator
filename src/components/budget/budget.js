import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./budget.scss"

const Budget = ({ budget = 0, currency = "$", }) => {
  const direction = budget > -1 ? "positive" : "negative"
  return (
    <div className={classnames("budget", direction)}>
      <span className="currency">{currency}</span>
      <span className="amount">{budget.toLocaleString()}</span>
    </div>
  )
}

Budget.displayName = "Budget"

Budget.propTypes = {
  budget: PropTypes.number,
  currency: PropTypes.string,
}

export default Budget
