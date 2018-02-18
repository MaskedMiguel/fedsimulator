// import React from "react"
// import { shallow } from "enzyme"
// import configureStore from "redux-mock-store"
//
// import Taping from "../src/components/taping/taping"
// import TapingDay from "../src/components/taping/day.container"
//
// const mockStore = configureStore()
// const initialStoreState = {
//   tapings: [
//     { id: 1, name: "Test", day: 0, brandId: null },
//     { id: 2, name: "Test", day: 1, brandId: 1 },
//     { id: 3, name: "Test", day: 1, brandId: 1 },
//     { id: 4, name: "Test", day: 3, brandId: 2 },
//     { id: 5, name: "Test", day: 4, brandId: 3 },
//   ],
// }
//
// const props = {
//   brandId: null,
//   day: 0,
// }
//
// let store
// let component
// describe.skip("Given the TapingDay component", () => {
//   beforeEach(() => {
//     store = mockStore(initialStoreState)
//     component = shallow(<TapingDay store={store} {...props} />).shallow()
//   })
//
//   describe("when the date is 0 and the brandId is null", () => {
//     before(() => {
//       props.brandId = null
//       props.day = 0
//     })
//
//     it("should have 1 taping", () => {
//       expect(component.props().tapings).to.have.length(1)
//     })
//
//     it("should have 1 instances of Taping component", () => {
//       expect(component.dive().find(Taping)).to.have.length(1)
//     })
//   })
//
//   describe("when the date is 1 and the brandId is 1", () => {
//     before(() => {
//       props.brandId = 1
//       props.day = 1
//     })
//
//     it("should have 2 tapings filtered by the store", () => {
//       expect(component.props().tapings).to.have.length(2)
//     })
//
//     it("should have 2 instances of Taping component", () => {
//       expect(component.dive().find(Taping)).to.have.length(2)
//     })
//   })
//
//   describe("when the date is 1 and the brandId is 1", () => {
//     before(() => {
//       props.brandId = 1
//       props.day = 4
//     })
//
//     it("should have NO tapings", () => {
//       expect(component.props().tapings).to.have.length(0)
//     })
//
//     it("should have NO instances of Taping component", () => {
//       expect(component.dive().find(Taping)).to.have.length(0)
//     })
//   })
// })
