import { compose, withProps, withStateHandlers } from "recompose"
import { connect } from "react-redux"

import withStyle from "../../hoc/withStyle.js"

import { resetRoster, generateRoster } from "../../actions/roster"
import { ROSTER_CONFIRM_RESET } from "../../constants/confirmations"

import RosterPage from "./roster"

const propsMapper = props => {
  const currentWrestler = props.id ? props.roster.find(wrestler => wrestler.id === props.id) : null

  return {
    currentWrestler,
    ...props,
  }
}

const defaultState = { id: false, creating: true, listView: false, }

const stateHandlers = {
  onToggleCreating: ({ creating, }) => () => ({
    creating: !creating,
    id: false,
  }),
  onSetId: ({ id, }) => () => ({
    id: id,
  }),
  onToggleListView: ({ listView, }) => () => ({
    listView: !listView,
  }),
  onClick: () => id => ({
    creating: false,
    id,
  }),
  onClose: () => () => ({
    creating: false,
    id: false,
  }),
}

export default compose(
  withStateHandlers(defaultState, stateHandlers),
  connect(
    state => ({
      roster: state.federation.roster,
    }),
    dispatch => ({
      onClear: () => {
        if (confirm(ROSTER_CONFIRM_RESET)) {
          dispatch(resetRoster())
        }
      },
      onGenerate: () => dispatch(generateRoster()),
    })
  ),
  withProps(propsMapper),
  withStyle
)(RosterPage)
