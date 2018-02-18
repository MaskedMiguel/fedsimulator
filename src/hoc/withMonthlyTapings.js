import React from "react"
import { compose, withProps } from "recompose"
import groupArray from "group-array"

import withTapings from "./withTapings"
import withGame from "./withGame"

import { getMonthDateRange } from "../constants/dates"

const propsMapper = props => {
  let { tapings, } = props
  const { game: { date, }, } = props
  let newTapings = []

  const datesInMonth = getMonthDateRange(date)
  const month = date.getMonth()
  const repeatsPerDay = groupArray(tapings.filter(item => item.repeat), "day")
  const nonRepeatsPerDay = groupArray(tapings.filter(item => !item.repeat && item.month === month), "day")

  datesInMonth.forEach(date => {
    if (nonRepeatsPerDay[date.getDate()] && nonRepeatsPerDay[date.getDate()][0]) {
      newTapings[date.getDate()] = nonRepeatsPerDay[date.getDate()][0]
    } else if (repeatsPerDay[date.getDay()] && repeatsPerDay[date.getDay()][0]) {
      newTapings[date.getDate()] = repeatsPerDay[date.getDay()][0]
    }
  })

  return {
    ...props,
    tapings: newTapings,
  }
}

const enhance = compose(withGame, withTapings, withProps(propsMapper))

export default enhance
