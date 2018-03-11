import React from "react"
import { compose, lifecycle, withProps, setDisplayName } from "recompose"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import addDays from "date-fns/add_days"
import addMonths from "date-fns/add_months"
import setDate from "date-fns/set_date"

import withBrands from "../../hoc/withBrands"
import withMonthlyTapings from "../../hoc/withMonthlyTapings"
import withGame from "../../hoc/withGame"

import { addOneDayToGame, updateGame } from "../../actions/game"
import { WEEK_TICK_TIMER, SKIP_MONTH_FINE, SKIP_MATCH_FINE } from "../../constants/game"
import { SKIP_MATCH_CONFIRM_CLEAR } from "../../constants/confirmations"

import Calendar from "./calendar"

const lifecycleMapper = {
  componentWillMount() {
    const { game: { paused, started, }, } = this.props
    this._interval = null

    if (!started) {
      this.redirect()
    } else if (paused) {
      this.clearInterval(this.props)
    } else {
      this.setUpInterval(this.props)
    }
  },
  componentWillReceiveProps(nextProps) {
    const { game: { paused, started, }, } = nextProps

    if (!started) {
      this.redirect()
    } else if (paused) {
      this.clearInterval(nextProps)
    } else {
      this.setUpInterval(nextProps)
    }
  },
  clearInterval() {
    clearInterval(this._interval)
  },
  componentWillUnmount() {
    this.clearInterval()
  },
  setUpInterval(props) {
    const { todaysShow, game, dispatch, } = props

    this.clearInterval()

    if (!todaysShow) {
      this._interval = setInterval(() => {
        dispatch(addOneDayToGame(game))
      }, WEEK_TICK_TIMER)
    }
  },
  redirect() {
    this.props.history.push("/story")
  },
}

const propsMapper = props => {
  const { game: { paused, date, brandId, budget, }, brands, tapings, } = props
  const currentDate = date.getDate()
  let todaysShow = null

  if (tapings[currentDate] && (tapings[currentDate].brandId === null || tapings[currentDate].brandId === brandId)) {
    todaysShow = tapings[currentDate]
  }

  return {
    todaysShow,
    brand: brands.find(item => item.id === brandId),
    goToBout: () => props.history.push(`/story/next-stage`),
    skipShow: () => props.onUpdateGame({ date: addDays(date, 1), budget: budget - SKIP_MONTH_FINE, }),
    onReset: () => props.onUpdateGame({ started: false, wrestlerId: null, matchId: null, male: null, brandId: null, }),
    onTogglePause: () => props.onUpdateGame({ paused: !paused, }),
    skipMonth: () => {
      if (confirm(SKIP_MATCH_CONFIRM_CLEAR)) {
        let newDate = setDate(date, 1)
        newDate = addMonths(newDate, 1)
        const totalTapingsPerMonth = tapings.filter(item => item.brandId === brandId || item.brandId === null).length

        props.onUpdateGame({ date: newDate, budget: budget - SKIP_MATCH_FINE * totalTapingsPerMonth, })
      }
    },
    ...props.game,
  }
}

const enhance = compose(
  withRouter,
  withBrands,
  withGame,
  connect(null, dispatch => ({
    onUpdateGame: props => dispatch(updateGame(props)),
  })),
  withMonthlyTapings,
  withProps(propsMapper),
  lifecycle(lifecycleMapper),
  setDisplayName("PageCalendarContainer")
)

export default enhance(Calendar)
