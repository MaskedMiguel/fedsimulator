import { Record } from "immutable"

export const schema = {
  hex: "#673ab7",
  light: Boolean(Math.round(Math.random())),
  highlighted: {},
  container: {},
}

export default Record(schema)
