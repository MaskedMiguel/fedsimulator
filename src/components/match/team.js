import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { Droppable } from "react-drag-and-drop"

import Button from "../button/button"
import Wrestler from "../wrestler/wrestler"
import { Trophy, Reset, Info } from "../icons"

const NOOP = () => {}

const Team = ({ classes = "", wrestlers = [], onSelectWinner = NOOP, onRemoveWrestler = NOOP, onDrop = NOOP, }) => {
  const hasWinner = wrestlers.find(wrestler => wrestler.winner)
  const hasManyWrestlers = wrestlers.length > 2
  const teamClasses = classnames(
    "team",
    "col-xs-12",
    { "has-winner": hasWinner, },
    { "has-wrestlers": wrestlers.length > 0, },
    { "col-lg-6 col-sm-6 ": !hasManyWrestlers, },
    { "col-lg-12 col-sm-12": hasManyWrestlers, },
    classes
  )
  return (
    <div className={teamClasses}>
      <Droppable types={["wrestler",]} onDrop={onDrop}>
        <div className="box dropzone shadow pulse">
          <Choose>
            <When condition={wrestlers.length > 0}>
              {wrestlers.map(wrestler => {
                const { id, } = wrestler

                return (
                  <div key={id} tabIndex={0} className="member center-xs middle-xs">
                    <Wrestler wrestler={wrestler} />
                    &nbsp;
                    <span className="tools">
                      <Button classes="btn-good btn-small btn-square" onClick={() => onSelectWinner(id)}>
                        <Trophy />
                      </Button>
                      <Button classes="btn-bad btn-small btn-square" onClick={() => onRemoveWrestler(id)}>
                        <Reset />
                      </Button>
                    </span>
                  </div>
                )
              })}
            </When>
            <Otherwise>
              <Info />&nbsp;Drop wrestlers here
            </Otherwise>
          </Choose>
        </div>
      </Droppable>
    </div>
  )
}

Team.propTypes = {
  classes: PropTypes.string,
  onDrop: PropTypes.func.isRequired,
  onRemoveWrestler: PropTypes.func.isRequired,
  onSelectWinner: PropTypes.func.isRequired,
  wrestlers: PropTypes.array.isRequired,
}

export default Team
