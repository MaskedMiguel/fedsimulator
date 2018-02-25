import { compose, withProps, branch, lifecycle, renderComponent } from "recompose"
import { connect } from "react-redux"
import pick from "lodash.pick"
import sortBy from "lodash.sortby"

import withStyle from "../../hoc/withHighlightedStyle"
import withRoster from "../../hoc/withRoster"

import EmptyRoster from "../../components/empty-roster"
import BattleRoyal from "./battle-royal"

import { generateEntries, resetBattleRoyal, updateBattleRoyal, eliminateEntry } from "../../actions/battle-royal"
import { ELIMINATION_TICK_TIMER } from "../../constants/game"

const validProps = ["onClear", "dispatch", "onGenerate", "male", "entries", "eliminations", "winner",]

const propsMapper = props => {
  const { roster, male, entries, amountOfEntries, simulate, } = props
  const maxEntries = roster.filter(item => item.male === male).length
  let winner,
    eliminated = sortBy(entries.filter(item => item.eliminationNumber > 0), "eliminationNumber").reverse()

  if (eliminated.length === entries.length - 1) {
    winner = entries.find(item => !item.eliminationNumber)
  }

  const newProps = {
    onSimulate: () => props.onSimulate(simulate),
    onEliminateEntry: () => props.onEliminateEntry(entries),
    onGenerateEntries: () => props.onGenerateEntries({ roster, male, amountOfEntries, }),
    onGenderUpdate: () => props.onGenderUpdate(male),
    maxEntries,
    eliminated,
    winner,
  }

  return Object.assign({}, pick(props, validProps), newProps)
}

const lifecycleMapper = {
  componentWillReceiveProps(nextProps) {
    const losers = nextProps.entries.filter(item => item.eliminationNumber > 0).length
    const maxLosers = nextProps.entries.length - 1

    if (nextProps.simulate && losers !== maxLosers) {
      clearInterval(this._interval)
      this._interval = setInterval(() => {
        nextProps.onEliminateEntry(nextProps.entries)
      }, ELIMINATION_TICK_TIMER)
    } else {
      clearInterval(this._interval)
    }
  },
  componentWillUnmount() {
    clearInterval(this._interval)
  },
}
export default compose(
  withRoster,
  withStyle,
  connect(
    state => ({
      ...state.battleRoyal,
    }),
    dispatch => ({
      onEliminateEntry: entries => dispatch(eliminateEntry(entries)),
      onGenderUpdate: male => dispatch(updateBattleRoyal({ eliminations: [], entries: [], simulate: false, male: !male, })),
      onSimulate: simulate => dispatch(updateBattleRoyal({ simulate: !simulate, })),
      onClear: () => dispatch(resetBattleRoyal()),
      onGenerateEntries: props => dispatch(generateEntries(props)),
      onUpdateAmountOfEntries: ({ currentTarget: { value, }, }) => dispatch(updateBattleRoyal({ amountOfEntries: Number(value), })),
    })
  ),
  withProps(propsMapper),
  branch(props => props.roster.length === 0, renderComponent(EmptyRoster)),
  lifecycle(lifecycleMapper)
)(BattleRoyal)
