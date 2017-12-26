import { connect } from "react-redux"
import { Component } from "react"
import PropTypes from "prop-types"

class DefaultPage extends Component {
  componentWillMount() {
    const { brands, roster, name, router, started, untouched, } = this.props

    let pathName = "dashboard"

    if (started === false) {
      pathName = "/welcome"
    } else if (name === "") {
      pathName = "/name"
    } else if (untouched === true) {
      pathName = "/branding"
    } else if (brands.length === 0) {
      pathName = "/brands"
    } else if (roster.length === 0) {
      pathName = "/roster"
    }

    router.push(pathName)
  }

  render() {
    return null
  }
}

DefaultPage.displayName = "DefaultPage"

DefaultPage.contextTypes = {
  router: PropTypes.object.isRequired,
}

DefaultPage.propTypes = {
  brands: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  roster: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
  started: PropTypes.bool.isRequired,
  untouched: PropTypes.bool.isRequired,
}

export default connect(state => ({
  brands: state.federation.brands,
  name: state.game.name,
  roster: state.federation.roster,
  started: state.game.started,
  untouched: state.style.untouched,
}))(DefaultPage)
