import { Record } from "immutable"

export const schema = {
  hex: "#4B09BE",
  shade: -40,
  light: Boolean(Math.round(Math.random())),
  highlighted: {},
  container: {},
}

export default Record(schema)
