import React from "react"
import PropTypes from "prop-types"

import Champions from "../../components/champions/container"
import HeaderOne from "../../components/header/header"
import Simulator from "../../components/simulator"
import Ranking from "../../components/ranking/ranking"
import Segments from "../../components/segments/brands.container"

import { RANKED_COLUMNS } from "../../constants/ranking"

import "./dashboard.scss"

export const DashboardPage = ({ name = "", style = {}, championships = [], rankedMaleWrestlers = [], rankedFemaleWrestlers = [], }) => (
  <div className="dashboard">
    <HeaderOne>
      {name} Dashboard
      <span tabIndex="0" className="tools">
        <Simulator />
      </span>
    </HeaderOne>
    <Segments />
    <div className="row">
      <If condition={championships.length > 0}>
        <div className="col-xs">
          <div className="box">
            <Champions />
            <br />
          </div>
        </div>
      </If>
      <div className="col-xs">
        <div className="box">
          <Ranking style={style} amountToShow={30} rows={rankedMaleWrestlers} columns={RANKED_COLUMNS} title="Ranked Male Wrestlers" />
        </div>
      </div>
      <div className="col-xs">
        <div className="box">
          <Ranking style={style} amountToShow={30} rows={rankedFemaleWrestlers} columns={RANKED_COLUMNS} title="Ranked Female Wrestlers" />
        </div>
      </div>
    </div>
  </div>
)

DashboardPage.displayName = "DashboardPage"

DashboardPage.propTypes = {
  championships: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  rankedFemaleWrestlers: PropTypes.array.isRequired,
  rankedMaleWrestlers: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
}

export default DashboardPage
