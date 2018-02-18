import reducer from "../src/reducers/simulations"
import * as types from "../src/actions/types"

const action = {
  type: types.RESET,
  payload: false,
}

describe("given a simulations reducer", () => {
  let activeReducer

  before(() => (activeReducer = reducer(undefined, action)))

  it("and the default simulation speed is zero", () => {
    expect(activeReducer.simulationSpeed).to.equal(0)
  })


  describe("and an update simulation speed request is sent", () => {
    before(() => {
      action.type = types.UPDATE_SIMULATION
      action.payload = { simulationSpeed: 200 }
      activeReducer = reducer(activeReducer, action)
    })

    it("and the started is defaulted to true", () => {
      expect(activeReducer.simulationSpeed).to.equal(action.payload.simulationSpeed)
    })
  })
})
