import React from "react"
import { shallow } from "enzyme"

import { Container as Wrestlers } from "../src/components/wrestlers/wrestlers"

describe("Given the Wrestlers component", () => {
  let component

  before(() => (component = shallow(<Wrestlers />)))

  it("should render a wrestlers container div", () => {
    expect(component.find(".wrestlers")).to.have.length(1)
  })
})
