import React from "react"
import { compose, withProps } from "recompose"

import Wrestlers from "../../../components/wrestlers/wrestlers"

const enhance = compose(
  withProps(({ roster, }) => ({
    collection: roster,
    showGenderHeader: false,
  }))
)

export default enhance(Wrestlers)
