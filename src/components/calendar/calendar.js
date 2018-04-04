import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { dateHeader } from "../../constants/dates"
import Days from "./days"

import "./calendar.scss"

const NOOP = () => {}

const Calendar = ({ date = Date(), dates = [], emptyDates = [], events = [], EventComponent = NOOP, }) => {
  return (
    <div className="calendar">
      <Days />
      <div className="dates">
        {emptyDates.map(date => (
          <div key={date} className="day previous">
            <header>{date.getDate()}</header>
          </div>
        ))}
        {dates.map(currentDate => {
          const currentDay = currentDate.getDate()
          const active = date.getDate() === currentDay
          const currentEvent = events[currentDate.getDate()]

          return (
            <div key={currentDate} className={classnames("day", { active: active, })}>
              <header>{dateHeader(currentDate)}</header>
              {currentEvent ? <EventComponent {...currentEvent} /> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.object,
  dates: PropTypes.array,
  emptyDates: PropTypes.array,
  events: PropTypes.array,
  EventComponent: PropTypes.func,
}

export default Calendar
