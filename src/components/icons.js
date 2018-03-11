import React from "react"
import PropTypes from "prop-types"

const NOOP = () => {}

const Icon = ({ icon = false, children = "", onClick = NOOP, className = "", tabIndex = 0, ariaHidden = "true", title = "", }) => (
  <i className={`icon fa fa-${icon} ${className}`} aria-hidden={ariaHidden} tabIndex={tabIndex} title={title} onKeyPress={onClick} onClick={onClick}>
    {children}
  </i>
)

const Cross = ({ onClick, }) => new Icon({ icon: "times-circle", onClick, })
const Info = ({ onClick, }) => new Icon({ icon: "info-circle", onClick, })
const Trophy = ({ onClick, }) => new Icon({ icon: "trophy", onClick, })
const Create = ({ onClick, }) => new Icon({ icon: "plus-circle green", onClick, })
const Generate = ({ onClick, }) => new Icon({ icon: "rocket", onClick, })
const ListToggle = ({ onClick, }) => new Icon({ icon: "list", onClick, })
const Reset = ({ onClick, }) => new Icon({ icon: "trash", onClick, })
const Randomise = ({ onClick, }) => new Icon({ icon: "random", onClick, })
const Play = ({ onClick, }) => new Icon({ icon: "pause", onClick, })
const Pause = ({ onClick, }) => new Icon({ icon: "pause", onClick, className: "gold", })
const Tick = ({ onClick, }) => new Icon({ icon: "check-circle", onClick, })
const Gender = ({ gender = false, onClick = NOOP, }) => {
  let icon = "genderless"

  if (gender !== null) {
    icon = gender ? "male" : "female"
  }

  return new Icon({ icon, title: icon, onClick, })
}

const SortBy = ({ sortBy = false, onClick = NOOP, }) => {
  const icon = sortBy === "name" ? "font" : "shield"

  return new Icon({ icon, onClick, })
}
const Visible = ({ visible = false, onClick = NOOP, }) => {
  const icon = !visible ? "eye-slash" : "eye"

  return new Icon({ icon, onClick, })
}

const Direction = ({ asc = false, onClick = NOOP, }) => {
  const icon = asc ? "sort-asc" : "sort-desc"

  return new Icon({ icon, onClick, })
}

Icon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
}
Gender.propTypes = Object.assign({}, Icon.propTypes, { gender: PropTypes.bool, })

export { Cross, Info, Trophy, Icon, Create, Gender, Generate, Pause, Play, ListToggle, SortBy, Randomise, Visible, Tick, Direction, Reset }
