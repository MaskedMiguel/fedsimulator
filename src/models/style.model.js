import { Record } from "immutable"

const light = "#fff"
const dark = "#4B09BE"

export const schema = {
  backgroundColor: "#4B09BE",
  color: light,
  shade: -60,
  light: true,
  darkStyle: {
    color: light,
    backgroundColor: "#000025",
  },
}

export default Record(schema)
