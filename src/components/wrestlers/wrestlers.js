import React from "react"
import PropTypes from "prop-types"

import Row from "../row"
import Input from "../form/input"
import Wrestler from "../wrestler/wrestler"

import "./wrestlers.scss"

const noop = () => {}

export const Collection = ({ collection = [], ...props }) => {
  return collection.map(wrestler => <Wrestler key={wrestler.id} wrestler={wrestler} {...props} />)
}

export const Container = ({ searchText = "", onSearch = noop, collection = [], onClick = noop, canDrag = true, style = {}, }) => {
  const champions = collection.filter(item => item.championshipId)
  const regular = collection.filter(item => !item.championshipId)

  return (
    <div className="wrestlers" style={style}>
      <If condition={collection.length > 0}>
        <Input value={searchText} name="name" onChange={onSearch} label="" placeholder="Search..." />
        <div className="collection">
          <Collection collection={champions} onClick={onClick} canDrag={canDrag} />
        </div>
        <div className="collection">
          <Collection collection={regular} onClick={onClick} canDrag={canDrag} />
        </div>
      </If>
    </div>
  )
}

Collection.propTypes = {
  collection: PropTypes.array,
}

const ContainerPropTypes = Object.assign({}, Collection.propTypes, {
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
  collection: PropTypes.array,
  onClick: PropTypes.func,
  canDrag: PropTypes.bool,
  style: PropTypes.object,
})

Container.propTypes = ContainerPropTypes

export default Container
