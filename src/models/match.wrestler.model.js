import { Record } from "immutable"

export const schema = {
  id: undefined,
  teamId: null,
  winner: false,
  loser: false,
}

export default Record(schema)
