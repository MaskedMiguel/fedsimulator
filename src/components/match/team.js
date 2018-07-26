import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { Droppable } from "react-drag-and-drop"
import { Choose, When, Otherwise } from "jsx-control-statements"
import Button from "../button/button"
import Wrestler from "../wrestler/wrestler"

const NOOP = () => {}

const Team = ({ classes = "", wrestlers = [], onRemoveWrestler = NOOP, onDrop = NOOP, }) => {
  const hasWinner = wrestlers.find(wrestler => wrestler.winner)
  const hasLoser = wrestlers.find(wrestler => wrestler.loser)
  const hasManyWrestlers = wrestlers.length > 2
  const hasWrestlers = wrestlers.length > 0
  const teamClasses = classnames(
    "team",
    "col-xs-12",
    { "has-winner": hasWinner, },
    { "has-loser": hasLoser, },
    { "has-wrestlers": hasWrestlers, },
    { "col-lg-6 col-sm-6 ": !hasManyWrestlers, },
    { "col-lg-12 col-sm-12": hasManyWrestlers, },
    classes
  )
  return (
    <div className={teamClasses}>
      <Droppable types={["wrestler",]} onDrop={onDrop}>
        <div className={classnames("box", "dropzone", "pulse", { active: hasWrestlers, })}>
          <Choose>
            <When condition={hasWrestlers}>
              {wrestlers.map(wrestler => {
                const { id, } = wrestler

                return (
                  <div key={id} tabIndex={0} className="member center-xs middle-xs">
                    <Wrestler wrestler={wrestler} />
                    <span className="tools">
                      <Button classes="btn-bad btn-small" onClick={() => onRemoveWrestler(id)}>
                        🗑
                      </Button>
                    </span>
                  </div>
                )
              })}
            </When>
            <Otherwise>
              <div tabIndex={0} className="no-member center-xs middle-xs">
                <h3 tabIndex={1}>❕ Click a wrestler or drag & drop them here</h3>
              </div>
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
  wrestlers: PropTypes.array.isRequired,
}

export default Team
