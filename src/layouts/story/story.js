import React from "react"
import classNames from "classnames"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Budget from "../../components/budget/container"
import StyleBrands from "../style-brands"

import "./story.scss"
import "../../stylesheets/base.scss"

const StoryLayout = ({ children = "", classnames = "", style = {}, }) => (
  <div id="page-container" style={style} className={classNames(classnames, ["story", "page-container", "no-select",])}>
    <main>
      <div className="row go-back center-xs middle-xs">
        <div className="col-xs start-lg start-md start-sm center-xs">
          <div className="box">
            <Link to="/dashboard">Go back to management</Link>
          </div>
        </div>
        <div className="col-xs end-lg end-md end-sm center-xs">
          <div className="box">
            <Budget />
          </div>
        </div>
      </div>
      {children}
    </main>
    <StyleBrands />
  </div>
)

StoryLayout.displayName = "StoryLayout"

StoryLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
  style: PropTypes.object,
}

StoryLayout.defaultProps = {
  classnames: "",
}

export default connect(state => ({
  style: state.style.highlighted,
}))(StoryLayout)
