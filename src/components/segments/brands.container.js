import { compose, withProps, renderNothing, branch } from "recompose"
import { connect } from "react-redux"

import Segments from "./segments"

const propsMapper = ({ roster, brands, }) => {
  let segments = [],
    totalWins = roster.reduce((sum, wrestler) => sum + wrestler.wins, 0)

  brands.forEach(brand => {
    const value = roster.filter(wrestler => wrestler.brandId === brand.id).reduce((sum, wrestler) => sum + wrestler.wins, 0)
    if (value === 0) return

    const width = 100 * value / totalWins

    segments.push({ ...brand, width, value, })
  })
  return { segments, }
}

export default compose(
  connect(state => ({
    roster: state.federation.roster,
    brands: state.federation.brands,
    style: state.style,
  })),
  withProps(propsMapper),
  branch(props => props.segments < 1, renderNothing)
)(Segments)
