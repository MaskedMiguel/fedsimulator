import { connect } from "react-redux"
import { compose, mapProps } from "recompose"
import { withRouter } from "react-router-dom"

const propsMapper = props => {
  const id = props.match.params.id
  const currentShow = Object.assign({}, props.collection.find(item => item.id === id))

  currentShow.bouts = currentShow.bouts.map(boutId => {
    const bout = props.bouts.find(match => {
      return match.id === boutId
    })

    return bout
  })
  return {
    currentShow,
  }
}
export const withShow = compose(
  connect(state => ({
    collection: state.shows,
    bouts: state.matches,
  })),
  withRouter,
  mapProps(propsMapper)
)

export default withShow
