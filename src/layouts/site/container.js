import { connect } from "react-redux"
import { compose, withProps, lifecycle, withStateHandlers } from "recompose"

import * as versionActions from "../../actions/version"
import defaultLinks from "./links.json"

import SiteLayout from "./site"

import "../../stylesheets/base.scss"

const lifecycleMapper = {
  componentWillMount() {
    this.props.dispatch(versionActions.checkVersion())
  },

  componentDidMount() {
    window.scrollTo(0, 0)
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.version !== this.props.version) {
      nextProps.dispatch({
        type: "RESET",
      })
    }
  },
}

export const propsMapper = props => {
  const invertedStyle = props.style.darkStyle
  const links = !props.isSubMenuOpen ? defaultLinks : []

  return {
    links,
    invertedStyle,
    ...props,
  }
}

export const toggleSubMenuOpen = ({ isSubMenuOpen, }) => () => ({
  isSubMenuOpen: !isSubMenuOpen,
})

export const enhance = compose(
  withStateHandlers({ isSubMenuOpen: false, }, { toggleSubMenuOpen, }),
  connect(state => ({
    name: state.game.name,
    style: state.style,
    version: state.version,
  })),
  withProps(propsMapper),
  lifecycle(lifecycleMapper)
)

export default enhance(SiteLayout)
