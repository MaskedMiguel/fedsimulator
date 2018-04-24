import { compose, withProps, branch, renderComponent } from "recompose"
import { connect } from "react-redux"
import { List } from "immutable"
import { withRouter } from "react-router-dom"

import withStyle from "../../hoc/withHighlightedStyle"
import withRoster from "../../hoc/withRoster"
import withChampionships from "../../hoc/withChampionships"
import withBout from "../../hoc/withBout"
import EmptyRoster from "../../components/empty-roster"
import CreateAMatch from "./create-a-match"

import { getId } from "../../models/model.helper"
import { addWrestlerToMatch, randomiseMatch, resetMatch } from "../../actions/matches"
import { simulateMatch } from "../../actions/roster"
export const pick = items => items[Math.floor(Math.random() * (items.length - 1))]

export default compose(
  withBout,
  withRoster,
  withChampionships,
  withRouter,
  connect(
    state => ({
      matches: state.matches,
    }),
    dispatch => ({
      onResetMatch: id => dispatch(resetMatch(id)),
      onRandomise: id => dispatch(randomiseMatch(id)),
      onWrestlerClick: props => dispatch(addWrestlerToMatch(props)),
      onSimulateMatch: props => dispatch(simulateMatch(props)),
    })
  ),
  withProps(props => {
    let newProps, winner, loser
    const { championships, roster, bout: currentMatch, } = props

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
        onResetMatch: () => props.onResetMatch(currentMatch.id),
        onSimulateMatch: event => {
          event.preventDefault()

          return props.onSimulateMatch({
            roster,
            wrestlers: currentMatch.wrestlers,
            championships,
          })
        },
        onRandomise: event => {
          event.preventDefault()

          return props.onRandomise({ matchId: currentMatch.id, roster: props.roster, })
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
