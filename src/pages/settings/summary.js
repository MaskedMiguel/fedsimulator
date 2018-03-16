import React from "react"
import PropTypes from "prop-types"

import ImportSummary from "../../components/importer/summary"

const SettingsSummary = ({ style = {}, }) => (
  <div className="row summary">
    <div className="col-xs-12">
      <div className="box" style={style}>
        <ImportSummary />
      </div>
    </div>
  </div>
)

SettingsSummary.displayName = "SettingsImporter"

SettingsSummary.propTypes = {
  style: PropTypes.object,
}

export default SettingsSummary
