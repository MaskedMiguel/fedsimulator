import { Record } from "immutable"

export const schema = {
  simulate: false,
  male: true,
  amountOfEntries: 30,
  entries: [],
}

export const BattleRoyal = new Record(schema)

export default BattleRoyal
