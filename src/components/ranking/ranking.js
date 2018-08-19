import React from "react"
import PropTypes from "prop-types"

import "./ranking.scss"

const Ranking = ({ title = "", amountToShow = 100, columns = {}, rows = [], style = {}, }) => (
  <div className="ranking">
    {title ? (
      <h3 style={style} tabIndex={0}>
        {title}
      </h3>
    ) : null}
    <table>
      <thead>
        <tr>
          {Object.keys(columns).map((column, key) => {
            const title = columns[column].title

            return (
              <td tabIndex="0" key={key}>
                <strong>
                  <center>{title}</center>
                </strong>
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {rows.slice(0, amountToShow).map((row, rowKey) => {
          return (
            <tr key={rowKey}>
              {Object.keys(columns).map((column, key) => {
                const type = columns[column].type

                return (
                  <td tabIndex="0" key={key}>
                    <small>
                      <center>
                        <Choose>
                          <When condition={type === "rank"}>#{rowKey + 1}</When>
                          <When condition={type === "winner"}>{row[column] === true ? "Winner!" : ""}</When>
                          <Otherwise>{row[column]}</Otherwise>
                        </Choose>
                      </center>
                    </small>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

Ranking.propTypes = {
  amountToShow: PropTypes.number,
  columns: PropTypes.object.isRequired,
  currencySymbol: PropTypes.string,
  rows: PropTypes.array.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
}

export default Ranking
