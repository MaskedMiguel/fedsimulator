import { Record } from "immutable"

export const schema = {
  backgroundColor: "#be0920", //"#3e029f",
  color: "#fff",
  darkBgColor: "#250000", //"#000025",
  shade: -60,
  untouched: true,
}

export const Style = new Record(schema)

export default Style
