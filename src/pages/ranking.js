import React from "react"
import Ranking from "../components/ranking/ranking"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import "./stylesheets/ranking"

class RankingPage extends React.Component {

  static propTypes = {
    wrestlers: React.PropTypes.array.isRequired,
    brands: React.PropTypes.array.isRequired,
  }

  displayName = "RankingPage"

  render() {
    return (
      <div className="page ranking">
        <Helmet title="Universe Ranking" />
        <div className="row">
          <div className="col-lg-6 col-xs-16">
            <Ranking
              title="Overall Male Superstars"
              amountToShow={10}
              wrestlers={this.props.wrestlers
                .filter((wrestler) => wrestler.male === true)
                .sort((a, b) => a.wins > b.wins)
                .reverse()
              }
            />
          </div>
          <div className="col-lg-6 col-xs-16">
            <Ranking
              title="Overall Female Superstars"
              amountToShow={10}
              wrestlers={this.props.wrestlers
                .filter((wrestler) => wrestler.male === false)
                .sort((a, b) => a.wins > b.wins)
                .reverse()
              }
            />
          </div>
        </div>
        <div className="row ranking__split">
          {this.props.brands.filter((brand) => brand.name !== "default").map((brand, key)=> {
            return (
              <div key={key} className="col-lg-4 col-xs-16">
                <Ranking
                  title={`${brand.name} Overall Ranking`}
                  amountToShow={5}
                  wrestlers={this.props.wrestlers
                    .filter((wrestler) => wrestler.brand === brand.name)
                    .sort((a, b) => a.wins > b.wins)
                    .reverse()
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  wrestlers: state.wrestlers,
  brands: state.brands,
}))(RankingPage)