import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Link } from "react-router-dom"

import Image from "../../components/form/image"
import Input from "../../components/form/input"
import Button from "../../components/button/button"
import Wrestlers from "../../components/wrestlers/container"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"

import "../../components/form/input.scss"
import "./create-a-show.scss"

const noop = () => {}

const ShowPage = ({
  currentShow = {},
  addBout = noop,
  updateImage = noop,
  simulateBouts = noop,
  updateName = noop,
  randomiseBouts = noop,
  style = {},
  printMode = false,
  togglePrintMode = noop,
}) => {
  const { name, image, bouts, } = currentShow
  return (
    <div className={classnames("create-a-show", { print: printMode, })}>
      <HeaderOne>
        Create A Show
        <span className="tools">
          <If condition={!printMode}>
            <Button value="Add Bout" classes="btn-good" onClick={addBout} />
            &nbsp;
            <Button value="Simulate" classes="btn-info" onClick={simulateBouts} />
            &nbsp;
            <Button value="Randomise" classes="btn-info" onClick={randomiseBouts} />
          </If>
          &nbsp;
          <Button value="Present" onClick={togglePrintMode} />
        </span>
      </HeaderOne>
      <div className="row panes">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 pane">
          <div className="box">
            <div className="row">
              <div className="col-xs-12">
                <div className="box">
                  <Input style={style} value={name} onChange={updateName} placeholder="Wrestlemania, Royal Rumble, Hell in a Cell..." />
                </div>
              </div>
              <div className="col-xs-12 start-xs top-xs">
                <div className="box">
                  <Image id="image" name="image" label={image ? "" : "Drop image here"} value={image} onChange={updateImage} />
                </div>
              </div>
            </div>
            {bouts.map((bout, key) => {
              const index = key + 1
              const title = bouts.length !== index ? `Match ${index}` : "Main Event"

              return (
                <div key={index} style={style} tabIndex={1} className="bout">
                  <h2 tabIndex={1}>
                    <Link style={style} to={`/create-a-match/${bout.id}`}>
                      {title}
                    </Link>
                  </h2>
                  <Match key={bout.id} currentMatch={bout} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 pane">
          <div className="box">
            <Wrestlers style={style} />
          </div>
        </div>
      </div>
    </div>
  )
}

ShowPage.propTypes = {
  addBout: PropTypes.func,
  currentShow: PropTypes.object,
  simulateBouts: PropTypes.func,
  updateName: PropTypes.func,
  updateImage: PropTypes.func,
  randomiseBouts: PropTypes.func,
  printMode: PropTypes.bool,
  togglePrintMode: PropTypes.func,
  style: PropTypes.object,
}

export default ShowPage
