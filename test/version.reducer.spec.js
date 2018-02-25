import reducer from "../src/reducers/version"
import * as types from "../src/actions/types"

import VERSION from "../src/constants/version"

const action = {
  type: types.CHECK_VERSION,
}

describe("given a version reducer", () => {
  it("should set a default version", () => {
    expect(reducer(undefined, action)).to.equal(VERSION)
  })

  it("and the version number is now 6", () => {
    expect(reducer(6, action)).to.equal(6)
  })
})
