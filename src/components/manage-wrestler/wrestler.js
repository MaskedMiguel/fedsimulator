import React from "react"
import PropTypes from "prop-types"

import Labels from "../labels/labels"
import Button from "../button/button"
import Image from "../form/image"
import Input from "../form/input"
import { Reset } from "../icons"

import "./manage-wrestler.scss"

const NOOP = () => {}
const genderLabels = [
  {
    id: true,
    name: "male",
    style: { backgroundColor: "MidnightBlue", color: "white" },
  },
  {
    id: false,
    name: "female",
    style: { backgroundColor: "MediumVioletRed", color: "white" },
  },
]
const createStyle = {
  backgroundColor: "green",
  color: "white",
}
const deleteStyle = {
  backgroundColor: "red",
  color: "white",
}

const EditWrestler = ({
  brandId = "",
  brands = [],
  championshipId = null,
  championships = [],
  id = false,
  image = "",
  male = true,
  name = "",
  onBrandSelected = NOOP,
  onChampionshipSelected = NOOP,
  onCreate = NOOP,
  onDelete = NOOP,
  onGenderUpdate = NOOP,
  onImageUpdate = NOOP,
  onNameUpdate = NOOP,
  onPointsUpdate = NOOP,
  onResetImage = NOOP,
  onResetChampionship = NOOP,
  points = 0,
  showDelete = true,
  style = {},
}) => (
  <div className="manage-wrestler" style={style}>
    <div className="name form-field">
      <label htmlFor="name">Name</label>
      <Input tabIndex="0" id="name" onChange={onNameUpdate} value={name} />
    </div>
    <div className="brands form-field">
      <label htmlFor="name">Brand</label>
      <Labels
        id="brands"
        tabIndex="0"
        onClick={onBrandSelected}
        highlighted={brandId}
        labels={brands}
      />
    </div>
    <If condition={id}>
      <div className="brands form-field">
        <label htmlFor="championshipId">
          Championship (<a onClick={onResetChampionship}>reset</a>)
        </label>
        <Labels
          id="championshipId"
          tabIndex="0"
          onClick={onChampionshipSelected}
          highlighted={championshipId}
          labels={championships.filter(
            item => item.male === male && item.brandId === brandId,
          )}
        />
      </div>
    </If>
    <div className="gender form-field">
      <label htmlFor="gender">Gender</label>
      <Labels
        id="gender"
        tabIndex="0"
        onKeyPress={onGenderUpdate}
        onClick={onGenderUpdate}
        highlighted={male}
        labels={genderLabels}
      />
    </div>
    <div className="image form-field">
      <label htmlFor="image">
        Image (<a onClick={onResetImage}>reset</a>)
      </label>
      <Image
        id="image"
        name="image"
        label={image ? "" : "Drop image here"}
        value={image}
        onChange={onImageUpdate}
      />
    </div>
    <div className="points form-field">
      <label htmlFor="points">Points</label>
      <Input
        id="points"
        tabIndex="0"
        onChange={onPointsUpdate}
        value={points}
      />
    </div>
    <If condition={!id}>
      <div className="create form-field">
        <Button
          classes="btn-create"
          onClick={onCreate}
          onKeyPress={onCreate}
          style={createStyle}
          tabIndex="0"
          value="Create wrestler"
        />
      </div>
    </If>
    <If condition={showDelete}>
      <div className="delete form-field">
        <Button
          classes="btn-delete"
          onClick={onDelete}
          onKeyPress={onDelete}
          style={deleteStyle}
          tabIndex="0">
          <Reset /> Delete wrestler
        </Button>
      </div>
    </If>
  </div>
)

EditWrestler.propTypes = {
  brandId: PropTypes.any,
  brands: PropTypes.array,
  championships: PropTypes.array,
  championshipId: PropTypes.any,
  id: PropTypes.any,
  image: PropTypes.string,
  male: PropTypes.bool,
  name: PropTypes.string,
  onBrandSelected: PropTypes.func,
  onChampionshipSelected: PropTypes.func,
  onCreate: PropTypes.func,
  onDelete: PropTypes.func,
  onGenderUpdate: PropTypes.func,
  onImageUpdate: PropTypes.func,
  onNameUpdate: PropTypes.func,
  onPointsUpdate: PropTypes.func,
  onResetImage: PropTypes.func,
  onResetChampionship: PropTypes.func,
  points: PropTypes.number,
  showDelete: PropTypes.bool,
  style: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
}

export default EditWrestler
