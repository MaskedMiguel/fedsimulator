import { Record } from "immutable"

export const schema = {
  id: undefined,
  name: "",
  brandId: null,
  rank: 5,
  male: true,
  switches: 0,
  wrestlers: [],
  tag: false,
  backgroundColor: "white",
  color: "black",
}

export default Record(schema)
