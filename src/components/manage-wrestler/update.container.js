import { compose, withProps } from "recompose"

import withBrands from "../../hoc/withBrands"
import withChampionships from "../../hoc/withChampionships"
import withStyle from "../../hoc/withStyle"

import { WRESTLER_CONFIRM_DELETE } from "../../constants/confirmations"
import { updateWrestler, deleteWrestler } from "../../actions/roster"

import EditWrestler from "./wrestler"

const propsMapper = ({ dispatch, id, }) => ({
  onResetChampionship: () => dispatch(updateWrestler({ championshipId: null, id: id, })),
  onChampionshipSelected: championshipId => dispatch(updateWrestler({ championshipId: String(championshipId), id: id, })),
  onGenderUpdate: male => dispatch(updateWrestler({ male: Boolean(male), id: id, })),
  onBrandSelected: brandId => dispatch(updateWrestler({ championshipId: null, brandId: String(brandId), id: id, })),
  onPointsUpdate: e => dispatch(updateWrestler({ points: Number(e.target.value), id: id, })),
  onNameUpdate: e => dispatch(updateWrestler({ name: String(e.target.value), id: id, })),
  onImageUpdate: (name, value) => dispatch(updateWrestler({ image: String(value), id: id, })),
  onResetImage: () => dispatch(updateWrestler({ image: "", id: id, })),
  onDelete: () => {
    if (confirm(WRESTLER_CONFIRM_DELETE)) {
      dispatch(deleteWrestler(id))
    }
  },
})

export default compose(
  withChampionships,
  withBrands,
  withStyle,
  withProps(propsMapper) //
)(EditWrestler)
