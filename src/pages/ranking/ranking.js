import React from "react"
import Ranking from "../../components/ranking/ranking"
import Segments from "../../components/segments/segments"
import * as wrestlersActions from "../../actions/wrestlers"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import { randomiseWrestlers, simulateMatch, logMatch } from "../../helpers/match"
import "./stylesheets/ranking"

class RankingPage extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    wrestlers: React.PropTypes.array.isRequired,
    moves: React.PropTypes.array.isRequired,
    brands: React.PropTypes.array.isRequired,
  }

  displayName = "RankingPage"

  onReset = (event) => {
    event.preventDefault()
    this.props.dispatch(
      wrestlersActions.reset()
    )
  }

  onSimulateBrandMatches = (amount) => {
    while (amount > 0) {
      let wrestlers = randomiseWrestlers({
        wrestlers: this.props.wrestlers,
        byPassBrandFilter: true,
      })
      let story = simulateMatch(wrestlers, this.props.moves)
      logMatch(this.props.dispatch, story)
      amount--
    }
  }

  render() {
    let segments = [],
      totalWins = this.props.wrestlers.reduce((sum, wrestler) => sum + wrestler.wins, 0)

    this.props.brands.forEach((brand, key) => {
      let value = this.props.wrestlers
          .filter(wrestler => wrestler.brand === brand.name)
          .reduce((sum, wrestler) => sum + wrestler.wins, 0),
        percent =  100 * value / totalWins

      if (value === 0) {
        return
      }

      segments.push({
        name: brand.name,
        value,
        percent,
      })
    })
    return (
      <div className="page ranking">
        <Helmet title="Universe Ranking" />
        <div className="navigation navigation--secondary">
          <div className="navigation__item">
            <a
              onKeyPress={this.onReset}
              onClick={this.onReset}>
              Clear wins & losses
            </a>
          </div>
          <div className="navigation__item">
            <span>Simulate all brand matches: </span>
            <a
              onKeyPress={this.onSimulateBrandMatches.bind(this, 1)}
              onClick={this.onSimulateBrandMatches.bind(this, 1)}>
              1
            </a>
            <span> | </span>
            <a
              onKeyPress={this.onSimulateBrandMatches.bind(this, 100)}
              onClick={this.onSimulateBrandMatches.bind(this, 100)}>
              100
            </a>
            <span> | </span>
            <a
              onKeyPress={this.onSimulateBrandMatches.bind(this, 1000)}
              onClick={this.onSimulateBrandMatches.bind(this, 1000)}>
              1000
            </a>
            <span> | </span>
            <a
              onKeyPress={this.onSimulateBrandMatches.bind(this, 10000)}
              onClick={this.onSimulateBrandMatches.bind(this, 10000)}>
              10,000
            </a>
          </div>
        </div>
        <div className="inpage-content">
          <div className="row">
            <div className="col-xs-12">
              <Segments segments={segments} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <Ranking
                title="Overall Male Superstars"
                amountToShow={10}
                wrestlers={this.props.wrestlers
                  .filter((wrestler) => wrestler.male === true)
                  .sort((a, b) => a.wins - a.losses > b.wins - b.losses)
                  .reverse()
                }
              />
            </div>
            <div className="col-lg-6 col-xs-12">
              <Ranking
                title="Overall Female Superstars"
                amountToShow={10}
                wrestlers={this.props.wrestlers
                  .filter((wrestler) => wrestler.male === false)
                  .sort((a, b) => a.wins - a.losses > b.wins - b.losses)
                  .reverse()
                }
              />
            </div>
          </div>
          <div className="row ranking__split">
            {this.props.brands.filter((brand) => brand.name !== "Default").map((brand, key)=> {
              return (
                <div key={key} className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <Ranking
                    title={`${brand.name} Overall Ranking`}
                    amountToShow={5}
                    showLabels={false}
                    wrestlers={this.props.wrestlers
                      .filter((wrestler) => wrestler.brand === brand.name)
                      .sort((a, b) => a.wins - a.losses > b.wins - b.losses)
                      .reverse()
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  moves: state.moves,
  wrestlers: state.wrestlers,
  brands: state.brands,
}))(RankingPage)
