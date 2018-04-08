import React from "react"
import PropTypes from "prop-types"

import Name from "../../../components/form/input"
import Button from "../../../components/button/button"
import Image8Bit from "../../../hoc/8bit"

import Brand from "./brand.container"
import Gender from "./gender.container"

import "./start.scss"

import { NAME_PLACEHOLDER } from "../../../constants/game"

const NOOP = () => {}

export const getName = name => (name.length > 3 ? name : "Superstar")

const StoryStart = ({ canStart = false, name = "", step = 1, onChangeName = NOOP, onStart = NOOP, }) => (
  <div className="story start">
    <div className="row">
      <div className="col-lg-4 col-xs-12">
        <Image8Bit src="/images/owner.jpg" />
        <br />
        <br />
        <header>Welcome to your journey {getName(name)}!</header>
        <br />
        <p>The Universe is ready to see you shine bright</p>
        <br />
        <p>but first... you must tell the fans who you are!</p>
        <br />
        <p>Lets start with some basics...</p>
        <br />
        <br />
      </div>
      <div className="col-lg-8 col-xs-12">
        <div className="box">
          <header>Step {step++}</header>
          <p>Name your superstar character</p>
          <Name onChange={onChangeName} value={name} placeholder={NAME_PLACEHOLDER} />
          <br />
          <br />
          <header>Step {step++}</header>
          <p>Select the brand you will impact</p>
          <Brand />
          <br />
          <br />
          <header>Step {step++}</header>
          <p>Which division do you fight in?</p>
          <Gender />
          <br />
          <br />
          <Choose>
            <When condition={!canStart}>
              <Button onClick={NOOP} classes={["btn-large", "btn-bad",]}>
                Fill out your bio to continue!
              </Button>
            </When>
            <Otherwise>
              <Button onClick={onStart} classes={["btn-large", "btn-good",]}>
                Start your rise to the top
              </Button>
            </Otherwise>
          </Choose>
        </div>
      </div>
    </div>
  </div>
)

StoryStart.propTypes = {
  name: PropTypes.string,
  canStart: PropTypes.bool,
  onStart: PropTypes.func,
  step: PropTypes.number,
  style: PropTypes.object,
  onChangeName: PropTypes.func,
}

export default StoryStart
