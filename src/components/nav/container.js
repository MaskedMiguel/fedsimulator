import { compose, withStateHandlers, withProps } from "recompose"
import { withRouter } from "react-router"

import Nav from "./nav"

const toggleSubMenuOpen = ({ isSubMenuOpen, }) => () => ({
  isSubMenuOpen: !isSubMenuOpen,
})

const propsMapper = ({ links, location: { pathname, }, }) => {
  const activeUrl = pathname.replace(/^\//, "")
  links = links.map(link => {
    link.active = activeUrl === link.url
    return link
  })

  return { links, }
}

export default compose(
  withRouter,
  withStateHandlers({ isSubMenuOpen: false, }, { toggleSubMenuOpen, }),
  withProps(propsMapper)
  //
)(Nav)
