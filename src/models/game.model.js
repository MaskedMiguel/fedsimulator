import { Record } from "immutable"

export const schema = {
  id: undefined,
  name: "",
  started: false,
  simulation: false,
  simulationSpeed: 0,
}

export default Record(schema)
