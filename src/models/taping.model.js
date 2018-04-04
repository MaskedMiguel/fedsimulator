import { Record } from "immutable"

export const schema = {
  id: undefined,
  name: "",
  month: 0,
  day: 1,
  repeat: true,
  brandId: null,
  color: "black",
  backgroundColor: "white",
}

export default Record(schema)
