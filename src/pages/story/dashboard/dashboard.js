import React from "react"
import PropTypes from "prop-types"

import Champions from "../../../components/champions/container"
import Ranking from "../../../components/ranking/ranking"

import { RANKED_COLUMNS } from "../../../constants/ranking"

import "./dashboard.scss"

export const DashboardPage = ({ style = {}, male = null, brandId = null, championships = [], rankedItems = [], }) => (
  <div className="dashboard">
    <If condition={championships.length > 0}>
      <Champions brandId={brandId} male={male} />
      <br />
    </If>
    <Ranking style={style} amountToShow={30} rows={rankedItems} columns={RANKED_COLUMNS} />
  </div>
)

DashboardPage.displayName = "DashboardPage"

DashboardPage.propTypes = {
  brandId: PropTypes.string,
  championships: PropTypes.array,
  rankedItems: PropTypes.array,
  style: PropTypes.object,
  male: PropTypes.bool,
}

export default DashboardPage
