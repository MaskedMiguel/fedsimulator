import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Row from "../../components/row"
import Taping from "../../components/taping/taping"
import HeaderOne from "../../components/header/header"
import Calendar from "../../components/calendar/container"
import Button from "../../components/button/button"

import { Pause, Play, Reset } from "../../components/icons"
import { pageTitle } from "../../constants/dates"

const NOOP = () => {}

const CalendarPage = ({
  brand = {},
  date = new Date(),
  goToShow = NOOP,
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
    <section className={classnames("page", "story", "calendar")}>
      <HeaderOne>
        {pageTitle(date)} for {brand.name}&nbsp;
        <span className="tools">
          <Choose>
            <When condition={paused}>
              <i className="icon fa fa-pause" onClick={onTogglePause} />
            </When>
            <Otherwise>
              <Play onClick={onTogglePause} />
            </Otherwise>
          </Choose>
          <Reset onClick={onReset} />
        </span>
      </HeaderOne>
      <Calendar {...calendarProps} />
      <If condition={todaysShow}>
        <Row classes="center-xs middle-xs">
          <Button classes="btn-good btn-large" onClick={goToShow}>
            Start Show
          </Button>
          <Button classes="btn-bad btn-large" onClick={skipShow}>
            Skip Show
          </Button>
          <Button classes="btn-bad btn-large" onClick={skipMonth}>
            Skip Month
          </Button>
        </Row>
      </If>
    </section>
  )
}

CalendarPage.displayName = "CalendarPage"

CalendarPage.propTypes = {
  brand: PropTypes.object,
  date: PropTypes.object,
  goToShow: PropTypes.func,
  onReset: PropTypes.func,
  onTogglePause: PropTypes.func,
  paused: PropTypes.bool,
  skipMonth: PropTypes.func,
  skipShow: PropTypes.func,
  tapings: PropTypes.array,
  todaysShow: PropTypes.any,
}

export default CalendarPage
