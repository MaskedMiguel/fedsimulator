import { connect } from "react-redux"
import { compose, withProps } from "recompose"
import { withRouter } from "react-router-dom"
import groupBy from "lodash.groupby"

const propsMapper = props => {
  const id = props.match.params.id
  const bout = props.bouts.find(item => item.id === id)
  bout.wrestlers = bout.wrestlers.map(matchWrestler => {
    const wrestler = props.roster.find(wrestler => wrestler.id === matchWrestler.id)

    return Object.assign({}, matchWrestler, wrestler)
  })
  bout.teams = groupBy(bout.wrestlers, "teamId")

  return {
    bout,
  }
}
export const withBout = compose(
  connect(state => ({
    bouts: state.matches,
    roster: state.roster,
  })),
  withRouter,
  withProps(propsMapper)
)

export default withBout
