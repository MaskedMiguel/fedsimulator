import React from "react"
import PropTypes from "prop-types"

import Row from "../../../components/row"
import Name from "../../../components/form/input"
import Button from "../../../components/button/button"
import { Icon } from "../../../components/icons"
import Image8Bit from "../../../hoc/8bit"

import Brand from "./brand.container"
import Gender from "./gender.container"
import SelectFriends from "./friends.container"
import SelectFoes from "./foes.container"

import "./start.scss"

import { NAME_PLACEHOLDER } from "../../../constants/game"

const NOOP = () => {}
export const getName = name => (name.length > 3 ? name : "Superstar")

const StoryStart = ({ canStart = false, name = "", step = 1, roster = [], style = {}, onChangeName = NOOP, onStart = NOOP, }) => (
  <section className="page story start">
    <div className="row">
      <div className="col-lg-3 col-xs-12">
        <Image8Bit src="images/owner.jpg" />
        <br />
        <br />
        <header>Welcome to your journey {getName(name)}!</header>
        <br />
        <p>The Universe is ready to see you shine bright</p>
        <br />
        <p>First you must find out who you are!</p>
        <br />
        <p>Lets start with the basics...</p>
      </div>
      <div className="col-lg-9 col-xs-12">
        <Row style={style}>
          <Row>
            <header>Step {step++}</header>
            <p>Name your superstar character</p>
            <Name onChange={onChangeName} value={name} placeholder={NAME_PLACEHOLDER} />
          </Row>
          <Row>
            <header>Step {step++}</header>
            <p>Select the brand you will impact</p>
            <Brand />
          </Row>
          <Row>
            <header>Step {step++}</header>
            <p>Who do you fight for</p>
            <Gender />
          </Row>
          <Row>
            <header>Step {step++}</header>
            <p>Do you have an allies?</p>
            <SelectFriends roster={roster} />
          </Row>
          <Row>
            <header>Step {step++}</header>
            <p>Who are your foes</p>
            <SelectFoes roster={roster} />
          </Row>
          <Row style={style}>
            <Choose>
              <When condition={!canStart}>
                <Button onClick={NOOP} classes={["btn-large", "btn-bad",]}>
                  <Icon icon={"check"} /> Fill out your bio to continue!
                </Button>
              </When>
              <Otherwise>
                <Button onClick={onStart} classes={["btn-large", "btn-good",]}>
                  <Icon icon={"check"} /> Start your rise to the top
                </Button>
              </Otherwise>
            </Choose>
          </Row>
        </Row>
      </div>
    </div>
  </section>
)

StoryStart.propTypes = {
  name: PropTypes.string,
  canStart: PropTypes.bool,
  onStart: PropTypes.func,
  roster: PropTypes.array,
  step: PropTypes.number,
  style: PropTypes.object,
  onChangeName: PropTypes.func,
}

export default StoryStart
