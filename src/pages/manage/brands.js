import { compose, withProps } from "recompose"
import { connect } from "react-redux"
import orderBy from "lodash/orderBy"

import Form from "../../components/forms/brand"
import Manage from "./container"

import { deleteBrand, updateBrand as update, createBrand as create, resetBrands as reset } from "../../actions/brands"
import { CONFIRM_RESET, CONFIRM_DELETE } from "../../constants/confirmations"

const enhance = compose(
  connect(
    state => ({
      collection: orderBy(state.brands, "name"),
    }),
    dispatch => ({
      onUpdate: item => dispatch(update(item)),
      onCreate: item => dispatch(create(item)),
      onDelete: id => {
        if (confirm(CONFIRM_DELETE)) {
          dispatch(deleteBrand(id))
        }
      },
      onClear: () => {
        if (confirm(CONFIRM_RESET)) {
          dispatch(reset())
        }
      },
    })
  ),
  withProps(() => ({
    title: "Manage Brands",
    Form,
  }))
)

export default enhance(Manage)
