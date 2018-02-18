import { Record } from "immutable"

export const schema = {
  id: undefined,
  brandId: undefined,
  championshipId: undefined,
  image: "",
  losses: 0,
  male: true,
  name: "Vacant",
  points: 50,
  wins: 0,
  injured: false,
  created: new Date(),
}

export default Record(schema)
