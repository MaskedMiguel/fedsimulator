import { Record, List } from "immutable"

export const schema = {
  id: undefined,
  showId: undefined,
  generated: false,
  simulated: false,
  resultStored: false,
  wrestlers: List(),
}

export default Record(schema)
