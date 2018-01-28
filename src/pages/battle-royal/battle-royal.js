import React from "react"
import PropTypes from "prop-types"
import Loadable from "react-loadable"

import ComponentLoader from "../../components/component-loader"
import { Reset, Generate } from "../../components/icons"
import Button from "../../components/button/withDarkStyle"
import HeaderOne from "../../components/header/header"
import Labels from "../../components/labels/labels"
import Slider from "../../components/form/slider"
import Wrestler from "../../components/wrestler/wrestler"

import { BATTLE_ROYAL_ENTRIES_COLUMNS, BATTLE_ROYAL_ELIMINATIONS_COLUMNS } from "../../constants/ranking"

import "./battle-royal.scss"

const NOOP = () => {}
const genderLabels = [{ id: true, name: "male", style: { backgroundColor: "blue" } }, { id: false, name: "female", style: { backgroundColor: "red" } }]

const Ranking = Loadable({
  loader: () => import("../../components/ranking/ranking"),
  loading: ComponentLoader,
})

const BattleRoyal = ({
  amountOfEntries = 30,
  entries = [],
  eliminated = [],
  winner = null,
  male = true,
  onGenderUpdate = NOOP,
  onClear = NOOP,
  onGenerateEntries = NOOP,
  onSimulate = NOOP,
  onUpdateAmountOfEntries = NOOP,
  style = {},
  simulate = false,
  maxEntries = 0,
}) => {
  const simulateButtonTitle = !simulate ? "Simulate match" : "Pause simulation"
  return (
    <section className="page battle-royal">
      <HeaderOne>
        Battle Royal
        <span tabIndex="0" className="tools">
          <Generate onClick={onGenerateEntries} title="Generate match" />
          <Reset onClick={onClear} />
        </span>
      </HeaderOne>
      <div className="row">
        <div style={style} className="col-xs center-xs start-lg start-md start-sm panel">
          <div className="box">
            <div className="form-group">
              <label htmlFor="entry">
                Entry amount ({amountOfEntries} / {maxEntries})
              </label>
              <div>
                <Slider max={maxEntries} value={amountOfEntries} onChange={onUpdateAmountOfEntries} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <Labels id="gender" tabIndex="0" onKeyPress={onGenderUpdate} onClick={onGenderUpdate} highlighted={male} labels={genderLabels} />
            </div>
            <div className="form-group">
              <Button style={style.darkStyle} classes="rounded" onClick={onGenerateEntries}>
                Generate entries
              </Button>
              <Choose>
                <When condition={winner}>
                  <h3>Winner!</h3>
                  <Wrestler wrestler={winner} />
                </When>
                <Otherwise>
                  <Button style={style.darkStyle} classes="rounded" onClick={onSimulate}>
                    {simulateButtonTitle}
                  </Button>
                </Otherwise>
              </Choose>
            </div>
          </div>
        </div>
        <If condition={entries.length > 0}>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div className="box">
              <Ranking style={style} amountToShow={entries.length} rows={entries} columns={BATTLE_ROYAL_ENTRIES_COLUMNS} title="Entries" />
            </div>
          </div>
        </If>
        <If condition={eliminated.length > 0}>
          <div className="col-xs-12 col-sm-4 col-md-5 col-lg-5">
            <div className="box">
              <Ranking style={style} amountToShow={eliminated.length} rows={eliminated} columns={BATTLE_ROYAL_ELIMINATIONS_COLUMNS} title="Eliminations" />
            </div>
          </div>
        </If>
      </div>
    </section>
  )
}

BattleRoyal.propTypes = {
  amountOfEntries: PropTypes.number,
  eliminated: PropTypes.array,
  entries: PropTypes.array,
  male: PropTypes.bool,
  maxEntries: PropTypes.number,
  onClear: PropTypes.func,
  onGenderUpdate: PropTypes.func,
  onGenerateEntries: PropTypes.func,
  onSimulate: PropTypes.func,
  onUpdateAmountOfEntries: PropTypes.func,
  simulate: PropTypes.bool,
  style: PropTypes.object,
  winner: PropTypes.any,
}

export default BattleRoyal
