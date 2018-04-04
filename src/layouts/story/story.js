import React from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import PropTypes from "prop-types"
import { compose } from "recompose"
import { connect } from "react-redux"

import Nav from "../../components/nav/nav"
import StyleBrands from "../style-brands"
import withStyle from "../../hoc/withStyle"

import links from "./links.json"

import "./story.scss"
import "../../stylesheets/base.scss"

const defaultWrestler = { name: "", points: 0, rank: 0, }
const navStyle = { backgroundColor: "white", color: "black", }

const StoryLayout = ({ brand = { name: "", }, children = "", wrestler = defaultWrestler, classnames = "", style = {}, }) => {
  const brandHighlight = { textShadow: `.3rem .3rem .01rem ${brand.backgroundColor}`, }
  return (
    <div id="page-container" style={style} className={classNames(classnames, ["story", "page-container", "no-select",])}>
      <main>
        <Nav style={navStyle} links={links}>
          <div className="nav-left">
            <h1>
              <NavLink exact to="/">
                Fed Sim
              </NavLink>
            </h1>
          </div>
        </Nav>
        <section className="page">
          <If condition={wrestler.name}>
            <div className="row small">
              <div className="col-xs-12 col-lg-4 evenly-xs start-lg">
                <div className="box" tabIndex={0}>
                  {wrestler.name}
                  <sup>{wrestler.points}</sup>
                </div>
              </div>
              <div className="col-xs-12 col-lg-4 evenly-xs center-lg">
                <div className="box" tabIndex={0}>
                  Rank {wrestler.rank}
                </div>
              </div>
              <div className="col-xs-12 col-lg-4 between-xs end-lg">
                <div className="box" style={brandHighlight} tabIndex={0}>
                  {brand.name}
                </div>
              </div>
            </div>
            <hr />
          </If>
          <div>{children}</div>
        </section>
      </main>
      <StyleBrands />
    </div>
  )
}

StoryLayout.displayName = "StoryLayout"

StoryLayout.propTypes = {
  brand: PropTypes.object,
  children: PropTypes.any,
  classnames: PropTypes.string,
  name: PropTypes.string,
  wrestler: PropTypes.shape({
    name: PropTypes.string,
    points: PropTypes.number,
    rank: PropTypes.number,
  }),
  style: PropTypes.object,
}

const enhance = compose(
  connect(state => {
    const brand = state.brands.find(item => item.id === state.game.brandId)
    const style = brand ? { ...brand, } : state.style.highlighted
    return {
      style,
      wrestler: state.roster.find(({ id, }) => id === state.game.wrestlerId),
    }
  })
)

export default enhance(StoryLayout)
