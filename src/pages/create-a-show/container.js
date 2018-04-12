import { compose, branch, withProps, mapProps, renderComponent } from "recompose"
import { connect } from "react-redux"

import withStyle from "../../hoc/withHighlightedStyle"
import withShow from "../../hoc/withShow"
import withRoster from "../../hoc/withRoster"

import { simulateMatch } from "../../actions/matches"
import { addBoutToShow, updateShow } from "../../actions/shows"
import { createMatch, deleteMatch, randomiseMatch } from "../../actions/matches"
import { getId } from "../../models/model.helper"

import EmptyRoster from "../../components/empty-roster"
import Show from "./create-a-show"

const cleanBouts = show => {
  show = Object.assign({}, show)
  show.bouts = show.bouts.map(item => (item.id ? item.id : item))
  return show
}

const enhance = compose(
  withShow,
  withStyle,
  connect(null, dispatch => ({
    onAddBoutToShow: ({ show, boutId, }) => dispatch(addBoutToShow({ show, boutId, })),
    onCreateMatch: ({ id, }) => dispatch(createMatch({ id, })),
    onDeleteMatch: id => dispatch(deleteMatch(id)),
    onUpdateShow: show => {
      show = cleanBouts(show)

      dispatch(updateShow(show))
    },
  })),
  withRoster,
  branch(({ roster, }) => roster.length === 0, renderComponent(EmptyRoster)),
  withProps(props => ({
    updateName: name => {
      const show = Object.assign({}, props.currentShow, { name: name.target.value, })

      props.onUpdateShow(show)
    },
    updateImage: value => {
      const show = Object.assign({}, props.currentShow, { image: String(value), })

      props.onUpdateShow(show)
    },
    addBout: () => {
      const id = getId()

      props.onCreateMatch({ id, })
      props.onAddBoutToShow({
        show: cleanBouts(props.currentShow),
        boutId: id,
      })
    },
    simulateBouts: () => props.currentShow.bouts.forEach(({ id, }) => props.dispatch(simulateMatch(id))),
    randomiseBouts: () => props.currentShow.bouts.forEach(({ id: matchId, }) => props.dispatch(randomiseMatch({ matchId, roster: props.roster, }))),
  })),
  mapProps(({ currentShow, addBout, updateName, onDeleteMatch, randomiseBouts, updateImage, simulateBouts, style, }) => ({
    currentShow,
    addBout,
    updateName,
    updateImage,
    onDeleteMatch,
    simulateBouts,
    randomiseBouts,
    style,
  }))
)

export default enhance(Show)
