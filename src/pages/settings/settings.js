import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router"
import chromatism from "chromatism"

import { Reset } from "../../components/icons"
import Social from "../../components/social"
import ColorPickers from "../../components/color-pickers/container"
import { resetAll } from "../../actions/game"
import { createWrestler } from "../../actions/roster"
import HeaderOne from "../../components/header/header"

import "./settings.scss"

const BRIGHTNESS_REDUCTION_STEP = 4

class Settings extends Component {
  render() {
    const { style, } = this.props
    let brightness = 0
    const reduceBrightness = () => {
      brightness = brightness + BRIGHTNESS_REDUCTION_STEP
      return {
        color: style.color,
        backgroundColor: chromatism.brightness(brightness, style.backgroundColor).hex,
      }
    }

    return (
      <section className="page settings">
        <HeaderOne>Settings</HeaderOne>
        <div className="row">
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <Link tabIndex="0" to="name">
                Name your federation
              </Link>
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <ColorPickers />
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <a tabIndex="0" onClick={this.onReset}>
                <Reset />
                &nbsp;Reset game
              </a>
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <a tabIndex="0" onClick={this.onGenerate}>
                &nbsp;Import Hall Of Fame
              </a>
            </div>
          </div>
          <div className="col-xs-12 pulse pulse-small">
            <div className="box" style={reduceBrightness()}>
              <Social />
            </div>
          </div>
        </div>
      </section>
    )
  }

  onReset = () => {
    const { router, dispatch, } = this.props

    dispatch(resetAll())
    router.push("/default")
  }

  onGenerate = () => {
    const maleWrestlers = [
      "Rick Rude",
      "Big Boss Man",
      "Diamond Dallas Page",
      "The Godfather",
      "Sting",
      "Kevin Nash",
      "Rikishi",
      "Randy Savage",
      "Scott Hall",
      "Jake Roberts",
      "The Ultimate Warrior",
      "Booker T",
      "Bruno Sammartino",
      "Bob Backlund",
      "Mick Foley",
      "Yokozuna",
      "Ron Simmons",
      "Edge",
      "Hacksaw Jim Duggan",
      "Shawn Michaels",
      "Stu Hart",
      "Gorgeous George",
      "Ted DiBiase",
      "Ricky Steamboat",
      "Steve Austin",
      "The Rock",
      "Perry Saturn",
      "Ric Flair",
      "Jerry Lawler",
      "Curt Henning",
      "Dusty Rhodes",
      "Eddie Guerrero",
      "Bret Hart",
      "Iron Shiek",
      "Hulk Hogan",
      "Paul Orndorff",
      "Roddy Piper",
      "Sgt Slaughter",
      "Vince McMahon",
      "Pat Patternson",
      "André the Giant",
    ]
    const femaleWrestlers = ["Mae Young", "Sunny", "Trish Stratus", "Jacqueline", "Beth Phoenix", "Alundra Blayze", "Lita", "Wendi Richter", "Alundra Blayze",]

    const loop = [{ wrestlers: maleWrestlers, male: true, }, { wrestlers: femaleWrestlers, male: false, },]

    loop.forEach(({ wrestlers, male, }) => {
      wrestlers.forEach(name => {
        const payload = {
          name,
          points: 75,
          male,
          brandId: "HOF",
        }
        this.props.dispatch(createWrestler(payload))
      })
    })
  }
}

Settings.contextTypes = {
  router: PropTypes.object.isRequired,
}

Settings.propTypes = {
  style: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  style: state.style,
}))(Settings)
