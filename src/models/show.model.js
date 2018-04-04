import { Record } from "immutable"

export const schema = {
  id: undefined,
  bouts: [],
  name: "",
  image: "",
}

export default Record(schema)
