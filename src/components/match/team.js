import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { Droppable } from "react-drag-and-drop"

import Button from "../button/button"
import Wrestler from "../wrestler/wrestler"

const NOOP = () => {}

const Team = ({ style = {}, classes = "", wrestlers = [], onSelectWinner = NOOP, onRemoveWrestler = NOOP, onDrop = NOOP, }) => {
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
        <div style={style} className={classnames("box", "dropzone", "pulse", { active: hasWrestlers, })}>
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
              <span tabIndex={1}>❕&nbsp;Drop wrestlers here</span>
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
  style: PropTypes.object,
}

export default Team
