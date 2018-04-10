import React from "react"
import PropTypes from "prop-types"

import Input from "../form/input"
import Wrestler from "../wrestler/wrestler"

import "./wrestlers.scss"

const noop = () => {}

export const Collection = ({ collection = [], ...props }) => {
  return collection.map(wrestler => <Wrestler key={wrestler.id} wrestler={wrestler} {...props} />)
}

export const Container = ({ searchText = "", onSearch = noop, collection = [], onClick = noop, canDrag = true, style = {} }) => {
  return (
    <div className="wrestlers" style={style}>
      <If condition={collection.length > 0}>
        <Input value={searchText} name="name" onChange={onSearch} label="" placeholder="Search..." />
        <span className="collection">
          <Collection collection={collection} onClick={onClick} canDrag={canDrag} />
        </span>
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
