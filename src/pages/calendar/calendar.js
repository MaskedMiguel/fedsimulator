import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Taping from "../../components/taping/taping"
import Calendar from "../../components/calendar/container"
import Button from "../../components/button/button"
import LightboxShow from "./light-box-show"
import { pageTitle } from "../../constants/dates"

const NOOP = () => {}

const titleClasses = ["col-xs-12", "col-sm-12", "col-md-6", "col-lg-8", "start-lg", "start-md", "center-sm", "center-xs",]
const buttonClasses = ["col-xs-12", "col-sm-12", "col-md-6", "col-lg-4", "end-lg", "end-md", "center-sm", "center-xs",]

import "./calendar.scss"

const CalendarPage = ({
  brand = {},
  date = new Date(),
  goToBout = NOOP,
  onReset = NOOP,
  onTogglePause = NOOP,
  paused = false,
  skipMonth = NOOP,
  skipShow = NOOP,
  tapings = [],
  todaysShow = null,
}) => {
  const calendarProps = {
    month: date.getMonth(),
    year: date.getFullYear(),
    date,
    events: tapings,
    EventComponent: Taping,
  }
  return (
    <div className="calendar-page">
      <div className="row middle-xs">
        <div className={classnames(titleClasses)}>
          <div className="box">
            <header>
              {pageTitle(date)} for {brand.name}
            </header>
          </div>
        </div>
        <div className={classnames(buttonClasses)}>
          <div className="box">
            <Choose>
              <When condition={paused}>
                <Button onClick={onTogglePause} classes="btn-good" value="▶ Resume" />
              </When>
              <Otherwise>
                <Button onClick={onTogglePause} classes="btn-mid" value="&#9612;&#9612;Pause" />
              </Otherwise>
            </Choose>
            <Button onClick={onReset} classes="btn-bad" value="Reset" />
          </div>
        </div>
      </div>
      <br />
      <Calendar {...calendarProps} />
      <If condition={todaysShow}>
        <LightboxShow todaysShow={todaysShow} date={date} goToBout={goToBout} skipShow={skipShow} skipMonth={skipMonth} />
      </If>
    </div>
  )
}

CalendarPage.displayName = "CalendarPage"

CalendarPage.propTypes = {
  brand: PropTypes.object,
  date: PropTypes.object,
  goToBout: PropTypes.func,
  onReset: PropTypes.func,
  onTogglePause: PropTypes.func,
  paused: PropTypes.bool,
  skipMonth: PropTypes.func,
  skipShow: PropTypes.func,
  tapings: PropTypes.array,
  todaysShow: PropTypes.any,
}

export default CalendarPage
