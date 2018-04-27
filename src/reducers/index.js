import { combineReducers } from "redux"
import battleRoyal from "./battle-royal"
import brands from "./brands"
import championships from "./championships"
import data from "./data"
import game from "./game"
import matches from "./matches"
import roster from "./roster"
import shows from "./shows"
import simulations from "./simulations"
import style from "./style"
import version from "./version"

const rootReducer = combineReducers({
  battleRoyal,
  brands,
  championships,
  data,
  game,
  matches,
  roster,
  shows,
  simulations,
  style,
  version,
})

export default rootReducer
