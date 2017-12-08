import { compose, withProps } from "recompose"
import { connect } from "react-redux"

import Segments from "./segments"

const propsMapper = ({ roster, brands, }) => {
  let segments = [],
    totalWins = roster.reduce((sum, wrestler) => sum + wrestler.wins, 0)

  brands.forEach(brand => {
    const value = roster.filter(wrestler => wrestler.brandId === brand.id).reduce((sum, wrestler) => sum + wrestler.wins, 0)
    const percent = 100 * value / totalWins

    if (value === 0) return

    brand.style = Object.assign({}, brand.style, {
      width: `${percent}%`,
    })
    segments.push({ ...brand, value, })
  })
  return { segments, }
}

export default compose(
  connect(state => ({
    roster: state.federation.roster,
    brands: state.federation.brands,
    style: state.style,
  })),
  withProps(propsMapper)
)(Segments)
