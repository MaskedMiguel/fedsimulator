import { compose, withProps, withStateHandlers } from "recompose"

import withStyle from "../../hoc/withHighlightedStyle"

import Manage from "./manage"

const propsMapper = props => ({
  currentItem: props.id ? props.collection.find(item => item.id === props.id) : null,
})

const defaultState = {
  id: false,
  creating: true,
}

const stateHandlers = {
  onToggleCreating: ({ creating, }) => () => ({
    creating: !creating,
    id: false,
  }),
  onSetId: ({ id, }) => () => ({
    id: id,
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
  withStyle,
  withProps(propsMapper) //
)(Manage)
