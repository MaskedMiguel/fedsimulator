import React from "react"
import PropTypes from "prop-types"
import Loadable from "react-loadable"
import Form from "react-jsonschema-form"

import ComponentLoader from "../../components/component-loader"
import Button from "../../components/button/button"
import HeaderOne from "../../components/header/header"
import Labels from "../../components/labels/labels"
import Wrestler from "../../components/wrestler/wrestler"

import { BATTLE_ROYAL_ENTRIES_COLUMNS, BATTLE_ROYAL_ELIMINATIONS_COLUMNS } from "../../constants/ranking"

import "./battle-royal.scss"

const schema = {
  type: "integer",
  default: 1,
  minimum: 1,
  maximum: 70,
}
const uiSchema = { "ui:widget": "range" }
const noop = () => {}
const genderLabels = [{ id: true, name: "male", backgroundColor: "blue" }, { id: false, name: "female", backgroundColor: "red" }]
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
  onGenderUpdate = noop,
  onClear = noop,
  onGenerateEntries = noop,
  onSimulate = noop,
  onUpdateAmountOfEntries = noop,
  style = {},
  simulate = false,
  maxEntries = 0,
}) => {
  const simulateButtonTitle = !simulate ? "Simulate" : "Pause"
  schema.maximum = maxEntries
  schema.title = `Entries (${amountOfEntries} / ${maxEntries})`
  return (
    <div className="battle-royal">
      <HeaderOne>
        Battle Royal
        <span tabIndex={0} className="tools">
          <Button classes="btn-info" onClick={onGenerateEntries}>
            Generate
          </Button>&nbsp;
          <Button classes="btn-good" onClick={onSimulate} value={simulateButtonTitle} />&nbsp;
          <Button classes="btn-bad" onClick={onClear} value="Reset" />&nbsp;
        </span>
      </HeaderOne>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="box">
            <If condition={entries.length > 0}>
              <Ranking style={style} amountToShow={entries.length} rows={entries} columns={BATTLE_ROYAL_ENTRIES_COLUMNS} title="Entries" />
            </If>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="box">
            <If condition={eliminated.length > 0}>
              <Ranking style={style} amountToShow={eliminated.length} rows={eliminated} columns={BATTLE_ROYAL_ELIMINATIONS_COLUMNS} title="Eliminations" />
            </If>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
          <div className="box panel" style={style}>
            <Form schema={schema} uiSchema={uiSchema} formData={amountOfEntries} onChange={data => onUpdateAmountOfEntries(data.formData)}>
              <span className="hide" />
            </Form>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <Labels id="gender" tabIndex="0" onKeyPress={onGenderUpdate} onClick={onGenderUpdate} highlighted={male} labels={genderLabels} />
            </div>
            <div className="form-group">
              <Choose>
                <When condition={winner}>
                  <label>Winner!</label>
                  <Wrestler wrestler={winner} />
                </When>
              </Choose>
            </div>
          </div>
        </div>
      </div>
    </div>
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
