import React, { PureComponent } from "react"
import classNames from "classnames"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import StyleBrands from "./style-brands"
import * as versionActions from "../../actions/version"
import Nav from "../nav/container"
import links from "./links.json"

import "../../stylesheets/base.scss"

class Page extends PureComponent {
  state = {
    openNavBar: true,
  }

  componentWillMount() {
    this.props.dispatch(versionActions.checkVersion())
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.version !== this.props.version) {
      nextProps.dispatch({
        type: "RESET",
      })
    }
  }

  render() {
    const { children, classnames, style, name, } = this.props
    const darkStyle = Object.assign({}, style, { backgroundColor: style.darkBgColor, })
    const isNavVisible = !style.untouched && this.state.openNavBar
    const activeLinks = isNavVisible ? links : []
    return (
      <div id="page-container" style={darkStyle} className={classNames(classnames, ["page-container", "no-select",])}>
        <main style={darkStyle}>
          <aside>
            <Nav name={name} tabIndex="0" links={activeLinks} style={style} modifier="main" />
          </aside>
          {children}
        </main>
        <StyleBrands />
      </div>
    )
  }
}

Page.displayName = "Page"

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node,]),
  classnames: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  style: PropTypes.object.isRequired,
  version: PropTypes.number.isRequired,
}

Page.defaultProps = {
  name: "Fed Simulator",
  classnames: "",
  version: 1,
}

export default connect(state => ({
  name: state.game.name,
  style: state.style,
  version: state.version,
}))(Page)
