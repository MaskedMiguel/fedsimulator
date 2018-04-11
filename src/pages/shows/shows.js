import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import HeaderOne from "../../components/header/header"
import Button from "../../components/button/button"
import Create from "../../components/create/show.container"

import { Rainbow, Item } from "../../components/rainbow/index"
import { ADD_ITEM } from "../../constants/confirmations"

const noop = () => {}

export const ShowsPage = ({ shows = [], style = {}, onReset = noop, onDelete = noop, }) => (
  <div className="shows">
    <HeaderOne>
      Shows
      <span tabIndex={0} className="tools">
        <Link to="/create-show">
          <Button value="Create" classes="btn-good" />
        </Link>
        &nbsp;
        <Button onClick={onReset} value="Delete All" classes="btn-bad" />
      </span>
    </HeaderOne>
    <Choose>
      <When condition={shows.length > 0}>
        <Rainbow>
          {shows.map(({ id, name, bouts, }, index) => {
            return (
              <Item key={id} index={index} style={style}>
                <Link key={id} to={`create-a-show/${id}`}>
                  <span style={{ color: style.color, }} tabIndex={0}>
                    {name}&nbsp;({bouts.length})
                  </span>
                </Link>
                <span>
                  <Button onClick={() => onDelete(id)} value="Delete" classes="btn-bad" />
                </span>
              </Item>
            )
          })}
        </Rainbow>
      </When>
      <Otherwise>
        <Create placeholder={ADD_ITEM} />
      </Otherwise>
    </Choose>
  </div>
)

ShowsPage.displayName = "ShowsPage"

ShowsPage.propTypes = {
  shows: PropTypes.array,
  style: PropTypes.object,
  onReset: PropTypes.func,
  onDelete: PropTypes.func,
}

export default ShowsPage
