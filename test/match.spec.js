import groupBy from "lodash.groupby"
import Match from "../src/helpers/match"

const wrestlers = [
  {
    id: "1",
    name: "Male 1",
    brand: "NXT",
    points: 250,
    winner: true,
    loser: false,
    male: true,
    championshipId: "1",
    teamId: "0",
  },
  {
    id: "2",
    name: "Male 2",
    brand: "NXT",
    points: 10,
    male: true,
    winner: false,
    loser: true,
    championshipId: null,
    teamId: "1",
  },
  {
    id: "3",
    name: "Female 1",
    brand: "Raw",
    points: 75,
    male: false,
    championshipId: "2",
    teamId: "0",
  },
  {
    id: "3",
    name: "Female 2",
    brand: "Raw",
    points: 75,
    male: false,
    championshipId: null,
    teamId: "1",
  },
]

const championships = [
  {
    id: "1",
    name: "Male 1",
    brand: "NXT",
    male: true,
  },
  {
    id: "2",
    name: "Female 1",
    brand: "NXT",
    male: false,
  },
]

describe.skip("given a match helper", () => {
  let activeMatch

  before(() => (activeMatch = new Match()))

  it("should return the initial state", () => {
    expect(activeMatch.getWrestlers()).to.be.an.array
  })

  describe(`and its given ${wrestlers.length} wrestlers`, () => {
    it(`should now have ${wrestlers.length} wrestlers`, () => {
      activeMatch = activeMatch.setWrestlers(wrestlers)

      expect(activeMatch.getWrestlers()).to.be.an("array")
      expect(activeMatch.getWrestlers()).to.have.length(wrestlers.length)
    })
  })

  describe(`and its given ${championships.length} championships`, () => {
    before(() => (activeMatch = activeMatch.setChampionships(championships)))
    it(`should now have ${championships.length} championships`, () => {
      expect(activeMatch.championships).to.be.an("array")
      expect(activeMatch.championships).to.have.length(championships.length)
    })
  })

  describe("and randomise team is requested", () => {
    before(() => (activeMatch = activeMatch.randomiseTeams(wrestlers)))
    it("should now have atleast two teams", () => {
      activeMatch = activeMatch.getWrestlers()
      const teams = groupBy(activeMatch, "teamId")

      expect(Object.keys(teams).length).to.be.above(0)
    })
  })
  describe("and simulate is requested", () => {
    before(() => (activeMatch = new Match().setWrestlers(wrestlers).simulate()))
    it("should now have a winner", () => {
      expect(activeMatch.getWinner()).to.be.an("object")
    })
    it("should now have a loser", () => {
      expect(activeMatch.getLoser()).to.be.an("object")
    })
  })
  describe("and a prepared match is loaded in", () => {
    describe("when move championship is requested", () => {
      let afterSimulate
      before(() => {
        activeMatch = new Match().setWrestlers(wrestlers)
        afterSimulate = activeMatch.simulate().moveChampionship()
      })

      it("should now have a winner", () => {
        if (afterSimulate.championshipChange) {
          expect(activeMatch.getWrestlers()[1].championshipId).to.be.equal(activeMatch.getWrestlers()[0].championshipId)
        }
      })
      it("should now have a loser", () => {
        expect(activeMatch.getLoser()).to.be.an("object")
      })
    })
  })
  // before(() => {
  //   console.log("hey")
  //   // wrestlers[2].winner = false
  //   // activeMatch = new Match().setWrestlers(wrestlers).simulate()
  //
  //   // console.log("hey", activeMatch.getWrestlers())
  // })
  // })
})
