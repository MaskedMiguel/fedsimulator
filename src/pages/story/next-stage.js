import React, { Component } from "react"
import { compose } from "recompose"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import withGame from "../../hoc/withGame"
import withRoster from "../../hoc/withRoster"
import { getId } from "../../models/model.helper"
import { createMatch } from "../../actions/matches"
import randomiseWrestlers from "../../helpers/randomise-wrestlers.js"

import storyline from "./storyline.json"

class NextStage extends Component {
  componentDidMount() {
    const { game, roster, dispatch, } = this.props
    const id = getId()
    const stage = storyline[game.stage]

    switch (stage.type) {
      case "scene":
        break
      case "bout":
        {
          const wrestlers = randomiseWrestlers({ wrestlers: roster, })

          const bout = {
            id,
            wrestlers,
          }

          dispatch(createMatch(bout))
        }
        break
    }

    // console.log("id", id)
    this.setState({
      stage,
      boutId: id,
    })
  }

  shouldComponentUpdate({ matches: bouts, }, nextState) {
    const { boutId, } = nextState
    // console.log("componentWillReceiveProps", bouts)
    if (boutId) {
      const newBout = bouts.find(bout => bout.id === boutId)

      if (newBout) {
        this.props.history.push(`/story/bout/${newBout.id}`)
      }
    }
  }

  render() {
    return null
  }
}

const enhance = compose(
  withRouter,
  withGame,
  withRoster,
  connect(state => ({
    matches: state.matches,
  }))
)

NextStage.propTypes = {
  history,
  game,
  dispatch,
  roster,
}

export default enhance(NextStage)
