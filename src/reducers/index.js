import { combineReducers } from "redux"
import battleRoyal from "./battle-royal"
import brands from "./brands"
import championships from "./championships"
import simulations from "./simulations"
import data from "./data"
import game from "./game"
import matches from "./matches"
import roster from "./roster"
import style from "./style"
import tapings from "./tapings"
import version from "./version"

const rootReducer = combineReducers({
  battleRoyal,
  brands,
  championships,
  simulations,
  data,
  game,
  matches,
  roster,
  style,
  tapings,
  version,
})

export default rootReducer
