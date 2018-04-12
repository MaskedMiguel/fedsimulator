import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Row from "../../components/row"
import Image from "../../components/forms/ui/image"
import Input from "../../components/form/input"
import Button from "../../components/button/button"
import Wrestlers from "../../components/wrestlers/container"
import HeaderOne from "../../components/header/header"
import Match from "../../components/match/container"

import "./create-a-show.scss"

const noop = () => {}

const ShowPage = ({ currentShow = {}, addBout = noop, updateImage = noop, simulateBouts = noop, updateName = noop, randomiseBouts = noop, style = {}, }) => {
  const { name, image, bouts, } = currentShow
  return (
    <div className="create-a-show">
      <HeaderOne>
        Create A Show
        <span className="tools">
          <Button value="Add Bout" classes="btn-good" onClick={addBout} />
          &nbsp;
          <Button value="Simulate" classes="btn-info" onClick={simulateBouts} />
          &nbsp;
          <Button value="Randomise" classes="btn-info" onClick={randomiseBouts} />
        </span>
      </HeaderOne>
      <div className="row panes">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 pane">
          <div className="box">
            <Row>
              <Input style={style} value={name} onChange={updateName} placeholder="Wrestlemania, Royal Rumble, Hell in a Cell..." />
            </Row>
            <br />
            <Choose>
              <When condition={bouts.length > 0}>
                <Row classes="center-xs">
                  <Image formData={image} onChange={updateImage} />
                </Row>
                {bouts.map((bout, key) => {
                  const index = key + 1
                  const title = bouts.length !== index ? `Match ${index}` : "Main Event"

                  return (
                    <div key={index} tabIndex={1} className="bout">
                      <h2 tabIndex={1}>
                        <Link to={`/create-a-match/${bout.id}`}>{title} ➪</Link>
                      </h2>
                      <Match key={bout.id} currentMatch={bout} />
                    </div>
                  )
                })}
              </When>
              <Otherwise>
                <Row classes="center-xs">
                  <h3>❕ Click "Add Bouts" to start making matches</h3>
                </Row>
              </Otherwise>
            </Choose>
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
  style: PropTypes.object,
}

export default ShowPage
