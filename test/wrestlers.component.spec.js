import React from "react"
import { shallow } from "enzyme"

import { schema } from "../src/models/wrestler.model"
import { Container as Wrestlers } from "../src/components/wrestlers/wrestlers"

const testProps = {
  collection: [{ ...schema, id: "123", male: true, }, { ...schema, id: "456", male: true, },],
}

describe("Given the Wrestlers component", () => {
  let component

  beforeEach(() => (component = shallow(<Wrestlers {...testProps} />)))

  it("should render a wrestlers container div", () => {
    expect(component.find(".wrestlers")).to.have.length(1)
  })

  // it.skip("should render two wrestlers", () => {
  //   expect(component.find(".wrestler")).to.have.length(2)
  // })
})
