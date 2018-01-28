import { connect } from "react-redux"
import { Component } from "react"
import PropTypes from "prop-types"

class DefaultPage extends Component {
  componentWillMount() {
    const { name, router, } = this.props

    let pathName = "dashboard"

    if (!name) {
      pathName = "/welcome"
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
  name: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
}

export default connect(state => ({
  name: state.game.name,
}))(DefaultPage)
