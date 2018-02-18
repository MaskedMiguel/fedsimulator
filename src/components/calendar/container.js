import React from "react"
import { compose, withProps, setDisplayName } from "recompose"
import eachDay from "date-fns/each_day"

import { getMonthDateRange, getFirstDayOfMonth } from "../../constants/dates"
import Calendar from "./calendar"

import subDays from "date-fns/sub_days"

const propsMapper = props => {
  const { events, date, } = props
  const dates = getMonthDateRange(date)
  const firstDayOfCurrentMonth = getFirstDayOfMonth(date)
  const daysOffset = firstDayOfCurrentMonth.getDay()
  const startDate = subDays(firstDayOfCurrentMonth, daysOffset)

  let emptyDates = []

  if (daysOffset > 0) {
    emptyDates = eachDay(startDate, subDays(firstDayOfCurrentMonth, 1))
  }

  return { date, dates, emptyDates, events, }
}

export const enhance = compose(withProps(propsMapper), setDisplayName("ComponentCalendarContainer"))

export default enhance(Calendar)
