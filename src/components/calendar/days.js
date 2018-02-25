import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const defaultDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

export const DayNames = ({ daysOfWeek = defaultDaysOfWeek, }) => (
  <span className="weekday-names">
    {daysOfWeek.map((weekdayName, currentDay) => {
      return (
        <div key={currentDay} className={classnames("weekday", "day", "name")}>
          <header>{weekdayName}</header>
        </div>
      )
    })}
  </span>
)

DayNames.displayName = "DayNames"

DayNames.propTypes = {
  daysOfWeek: PropTypes.array,
}

export default DayNames