import reducer from "../src/reducers/version"
import * as types from "../src/actions/types"

import { defaultState } from "../src/reducers/version"

const action = {
  type: types.CHECK_VERSION,
}

describe("given a version reducer", () => {
  it("should set a default version", () => {
    expect(reducer(undefined, action)).to.equal(defaultState)
  })

  it("and the version number is now 6", () => {
    expect(reducer(6, action)).to.equal(6)
  })
})
