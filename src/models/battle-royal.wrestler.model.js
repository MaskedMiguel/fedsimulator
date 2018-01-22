import { Record } from "immutable"

export const schema = {
  id: undefined,
  brandId: undefined,
  male: true,
  name: "Vacant",
  points: 0,
  eliminationNumber: null,
}

export default Record(schema)
