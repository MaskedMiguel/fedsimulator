import { Record } from "immutable"
import { WRESTLER_MAX_POINTS } from "../constants/game"

export const schema = {
  id: undefined,
  brandId: undefined,
  championshipId: undefined,
  male: true,
  name: "Vacant",
  points: 50,
  rank: 0,
  image: "",
  losses: 0,
  wins: 0,
  created: new Date(),
}

class Model extends Record(schema) {
  constructor(props) {
    props = Object.assign({}, props, { rank: Math.round(props.points / 20) })

    if (props.points > WRESTLER_MAX_POINTS) {
      props.points = WRESTLER_MAX_POINTS
    }
    super(props)
  }
}

export default Model
