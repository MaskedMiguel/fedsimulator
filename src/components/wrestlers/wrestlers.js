import React from "react"
import PropTypes from "prop-types"

import Wrestler from "../wrestler/wrestler"

import "./wrestlers.scss"

const NOOP = () => {}

export const Collection = ({ collection = [], ...props }) => {
  return collection.map(wrestler => <Wrestler key={wrestler.id} wrestler={wrestler} {...props} />)
}

export const Container = ({ collection = [], showGenderHeader = true, onClick = NOOP, canDrag = true, style = {}, }) => {
  const women = collection.filter(item => !item.male)
  const men = collection.filter(item => item.male)
  return (
    <div className="wrestlers" style={style}>
      <If condition={men.length > 0}>
        <If condition={showGenderHeader}>
          <h3>Men ({men.length})</h3>
        </If>
        <Collection collection={men} onClick={onClick} canDrag={canDrag} />
      </If>
      <If condition={women.length > 0}>
        <If condition={showGenderHeader}>
          <h3>Women ({women.length})</h3>
        </If>
        <Collection collection={women} onClick={onClick} canDrag={canDrag} />
      </If>
    </div>
  )
}

Collection.propTypes = {
  collection: PropTypes.array,
}

const ContainerPropTypes = Object.assign({}, Collection.propTypes, {
  collection: PropTypes.array,
  onClick: PropTypes.func,
  canDrag: PropTypes.bool,
  showGenderHeader: PropTypes.bool,
  style: PropTypes.object,
})

Container.propTypes = ContainerPropTypes

export default Container
