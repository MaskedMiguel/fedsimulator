import { compose, withStateHandlers } from "recompose"
import { withRouter } from "react-router"

import Nav from "./nav"

const toggleSubMenuOpen = ({ isSubMenuOpen, }) => () => ({
  isSubMenuOpen: !isSubMenuOpen,
})

export default compose(
  withRouter,
  withStateHandlers({ isSubMenuOpen: false, }, { toggleSubMenuOpen, })
  //
)(Nav)
