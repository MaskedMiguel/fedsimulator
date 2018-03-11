import { Record } from "immutable"

export const schema = {
  id: undefined,
  teamId: null,
  winner: false,
  loser: false,
  health: 100,
}

export default Record(schema)
