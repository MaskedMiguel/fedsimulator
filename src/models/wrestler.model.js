import { Record } from "immutable"

export const schema = {
  id: undefined,
  brandId: undefined,
  championshipId: undefined,
  created: new Date(),
  image: "",
  losses: 0,
  male: true,
  name: "Vacant",
  points: 50,
  wins: 0,
}

export default Record(schema)
