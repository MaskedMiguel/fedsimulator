import { Record } from "immutable"

export const schema = {
  backgroundColor: "#be0920",
  color: "#fff",
  darkBgColor: "#250000",
  shade: -60,
  untouched: true,
}

export const Style = new Record(schema)

export default Style
