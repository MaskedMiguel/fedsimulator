import { Record } from "immutable"

export const schema = {
  id: undefined,
  name: "",
  style: {
    backgroundColor: "purple",
    color: "white",
  },
}

export default Record(schema)
