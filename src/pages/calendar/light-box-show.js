import React from "react"
import PropTypes from "prop-types"

import Row from "../../components/row"
import Lightbox from "../../components/lightbox"
import Button from "../../components/button/button"

const NOOP = () => {}

const LightBoxShow = ({ todaysShow = {}, date = Date(), goToBout = NOOP, skipShow = NOOP, skipMonth = NOOP, }) => (
  <Lightbox canClose={false} isVisible={!!todaysShow}>
    <Row classes="center-xs middle-xs options">
      <header>
        {todaysShow.name}, {date.toLocaleDateString()}
      </header>
      <ul>
        <li>
          <Button classes="btn-good btn-large" onClick={goToBout}>
            Start Show
          </Button>
        </li>
        <li>
          <Button classes="btn-bad btn-large" onClick={skipShow}>
            Skip Show
          </Button>
        </li>
        <li>
          <Button classes="btn-bad btn-large" onClick={skipMonth}>
            Skip Month
          </Button>
        </li>
      </ul>
    </Row>
  </Lightbox>
)

LightBoxShow.displayName = "LightBoxShow"

LightBoxShow.propTypes = {
  date: PropTypes.object,
  goToBout: PropTypes.func,
  skipMonth: PropTypes.func,
  skipShow: PropTypes.func,
  tapings: PropTypes.array,
  todaysShow: PropTypes.any,
}

export default LightBoxShow
