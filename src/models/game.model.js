import { Record } from "immutable"

import { BUDGET } from "../constants/game"

export const schema = {
  id: undefined,
  name: "",
  started: false,
  paused: false,
  date: new Date(2018, 1, 1),
  foes: [],
  friends: [],
  brandId: null,
  wrestlerId: null,
  male: null,
  budget: BUDGET,
}

export default Record(schema)
