import { Record } from "immutable"

export const schema = {
  id: undefined,
  brandId: undefined,
  attendance: 0,
  date: new Date(),
  payPerView: false,
  rating: 0,
  name: false,
}

export default Record(schema)
