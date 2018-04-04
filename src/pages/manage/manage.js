import React from "react"
import PropTypes from "prop-types"

import HeaderOne from "../../components/header/header"
import Button from "../../components/button/button"
import { Rainbow, Item } from "../../components/rainbow"

import "./manage.scss"

const NOOP = () => {}

const Manage = ({
  title = "",
  Form = NOOP,
  creating = false,
  currentItem = null,
  onClick = NOOP,
  onClose = NOOP,
  onClear = NOOP,
  onDelete = NOOP,
  onCreate = NOOP,
  onUpdate = NOOP,
  onToggleCreating = NOOP,
  collection = [],
  style = {},
}) => {
  const hasPane = creating || currentItem
  const col = hasPane ? "col-lg-6 col-md-6 col-sm-6 col-xs-12 pane" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 pane"
  return (
    <div className="manage">
      <HeaderOne>
        {title}
        <span tabIndex="0" className="tools">
          <Button onClick={onToggleCreating} value="Create" classes="btn-good" />&nbsp;
          <Button onClick={onClear} value="Delete all" classes="btn-bad" />
        </span>
      </HeaderOne>
      <div className="row">
        <If condition={hasPane}>
          <div className={col}>
            <div className="box" style={style}>
              <If condition={creating}>
                <Form onSubmit={onCreate} onClose={onClose}>
                  <Button type="submit" classes="btn btn-good">
                    Create
                  </Button>
                </Form>
              </If>
              <If condition={currentItem}>
                <Form onSubmit={onUpdate} currentItem={currentItem}>
                  <Button type="submit" classes="btn-info">
                    Update
                  </Button>
                </Form>
              </If>
            </div>
          </div>
          <br />
        </If>
        <If condition={collection.length > 0}>
          <div className={col}>
            <Rainbow>
              {collection.map((item, index) => {
                const { id, name, color, backgroundColor, } = item
                return (
                  <Item key={id} onClick={() => onClick(id)} index={index} style={style}>
                    <Button style={{ color, backgroundColor, }}>{name}</Button>
                    <Button classes="btn-delete" onClick={() => onDelete(id)}>
                      Delete
                    </Button>
                  </Item>
                )
              })}
            </Rainbow>
          </div>
        </If>
      </div>
    </div>
  )
}

Manage.propTypes = {
  title: PropTypes.string,
  Form: PropTypes.func,
  creating: PropTypes.bool,
  currentItem: PropTypes.object,
  onClick: PropTypes.func,
  onClear: PropTypes.func,
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onToggleCreating: PropTypes.func,
  collection: PropTypes.array,
  style: PropTypes.object,
}

export default Manage
