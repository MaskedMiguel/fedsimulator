import { Record } from "immutable"

export const schema = {
  light: Boolean(Math.round(Math.random())),
  highlighted: {},
  container: {},
}

export default Record(schema)
