import { combineReducers } from "redux"
import battleRoyal from "./battle-royal"
import brands from "./brands"
import championships from "./championships"
import game from "./game"
import matches from "./matches"
import roster from "./roster"
import style from "./style"
import version from "./version"

const rootReducer = combineReducers({
  battleRoyal,
  brands,
  championships,
  game,
  matches,
  roster,
  style,
  version,
})

export default rootReducer
