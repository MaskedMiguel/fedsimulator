import reducer from "../src/reducers/style"
import * as types from "../src/actions/types"
import { schema } from "../src/models/style.model"

const action = {
  type: types.RESET,
  payload: false,
}
const compareHex = "#FF0000"

describe("given a style reducer", () => {
  let activeReducer

  before(() => (activeReducer = reducer(undefined, action)))

  it("and the untouched is defaulted to the right value", () => {
    expect(activeReducer.untouched).to.equal(schema.untouched)
  })

  it("and the color is defaulted to the right value", () => {
    expect(activeReducer.backgroundColor).to.equal(schema.backgroundColor)
  })

  describe("and a update request is sent", () => {
    before(() => {
      action.type = types.UPDATE_STYLE_HEX
      action.payload = { hex: compareHex, }
      activeReducer = reducer(activeReducer, action)
    })

    it("and the color is updated to red", () => {
      expect(activeReducer.hex).to.equal(action.payload.hex)
    })
  })
})
