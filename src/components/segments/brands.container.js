import { compose, withProps, renderNothing, branch } from "recompose"

import Segments from "./segments"
import withBrands from "../../hoc/withBrands"
import withStyle from "../../hoc/withStyle"
import withRoster from "../../hoc/withRoster"

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
  withBrands,
  withRoster,
  withStyle,
  //
  withProps(propsMapper),
  branch(props => props.segments < 1, renderNothing)
)(Segments)
