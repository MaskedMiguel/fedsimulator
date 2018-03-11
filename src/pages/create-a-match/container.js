import { compose, withProps, branch, renderComponent } from "recompose"
import { connect } from "react-redux"
import { List } from "immutable"

import withStyle from "../../hoc/withHighlightedStyle"
import withRoster from "../../hoc/withRoster"
import withBout from "../../hoc/withBout"

import EmptyRoster from "../../components/empty-roster"
import CreateAMatch from "./create-a-match"

import { getId } from "../../models/model.helper"
import { simulateMatch, addWrestlerToMatch, randomiseMatch } from "../../actions/matches"

export const pick = items => items[Math.floor(Math.random() * (items.length - 1))]

export default compose(
  withBout,
  withRoster,
  connect(
    state => ({
      roster: state.roster,
      matches: state.matches,
    }),
    dispatch => ({
      onRandomise: id => dispatch(randomiseMatch(id)),
      onSimulateMatch: id => dispatch(simulateMatch(id)),
      onWrestlerClick: props => dispatch(addWrestlerToMatch(props)),
    })
  ),
  withProps(props => {
    let newProps, winner, loser
    const { bout: currentMatch, } = props

    if (currentMatch) {
      winner = currentMatch && currentMatch.wrestlers.find(item => item.winner)
      loser = currentMatch && currentMatch.wrestlers.find(item => item.loser)

      if (winner && loser) {
        winner = props.roster.find(item => item.id === winner.id)
        loser = props.roster.find(item => item.id === loser.id)
      }

      newProps = {
        currentMatch,
        onWrestlerClick: wrestlerId => {
          return props.onWrestlerClick({
            matchId: currentMatch.id,
            wrestler: Object.assign({}, props.roster.find(item => item.id === wrestlerId), { teamId: getId(), }),
          })
        },
        onReset: () => {
          props.history.push(`/create-match/`)
        },
        onSimulateMatch: event => {
          event.preventDefault()

          return props.onSimulateMatch(currentMatch.id)
        },
        onRandomise: event => {
          event.preventDefault()

          return props.onRandomise({ id: currentMatch.id, roster: props.roster, })
        },
        winner,
        loser,
        numberOfWrestlers: new List(currentMatch.wrestlers).size,
      }
    }
    return { ...props, ...newProps, }
  }),
  withStyle,
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster))
)(CreateAMatch)
