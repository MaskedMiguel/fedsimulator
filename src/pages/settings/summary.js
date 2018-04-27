import React from "react"

import ImportSummary from "../../components/importer/summary"

const SettingsSummary = () => (
  <div className="row summary">
    <div className="col-xs-12">
      <div className="box">
        <ImportSummary />
      </div>
    </div>
  </div>
)

SettingsSummary.displayName = "SettingsImporter"

export default SettingsSummary
