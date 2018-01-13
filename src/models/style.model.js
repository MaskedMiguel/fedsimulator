import { Record } from "immutable"

const light = "#fff"
const dark = "#4b09be"

export const schema = {
  backgroundColor: "#4b09be",
  color: light,
  darkBgColor: dark,
  shade: -60,
  untouched: true,
  light: false,
  darkStyle: {
    color: light,
    backgroundColor: "#000025",
  },
}

export const Style = new Record(schema)

export default Style
