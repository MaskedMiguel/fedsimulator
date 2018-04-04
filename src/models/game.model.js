import { Record } from "immutable"

import { BUDGET } from "../constants/game"

export const schema = {
  id: undefined,
  name: "",
  date: new Date(2018, 1, 1),
  stage: 0,

  started: false,
  paused: false,

  brandId: null,
  wrestlerId: null,
  matchId: null,
  storyId: null,

  male: null,
  budget: BUDGET,
}

export default Record(schema)
