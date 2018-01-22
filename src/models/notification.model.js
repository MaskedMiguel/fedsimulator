import { Record } from "immutable"

export const schema = {
  id: undefined,
  title: false,
  type: "",
  read: false,
}

export default Record(schema)
