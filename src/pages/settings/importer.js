import React from "react"
import PropTypes from "prop-types"

import Importer from "../../components/importer"

const SettingsImport = ({ style = {}, }) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="box" style={style}>
        <Importer />
      </div>
    </div>
  </div>
)

SettingsImport.displayName = "SettingsImporter"

SettingsImport.propTypes = {
  style: PropTypes.object,
}

export default SettingsImport
