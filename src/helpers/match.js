import { List } from "immutable"
import includes from "lodash.includes"
import keyBy from "lodash.keyby"

import randomiseWrestlers from "./randomise-wrestlers"
import selectRandomResults from "./select-random-results"

import { POINTS_STEP } from "../constants/game"

export default class Match {
  /*
    wrestlers: array, collection of wrestlers already in the Match
    roster: array, full collection of available wrestlers to pick from
    championship: array, belts to pass the championshipId to
  */
  constructor({ roster = [], wrestlers = [], brandId = null, championships = [], }) {
    this.roster = new List(roster)
    this.brandId = String(brandId)
    this.wrestlers = new List(wrestlers)
    this.championships = new List(championships)
  }

  getQuickKeys() {
    this.winner = this.wrestlers.find(item => item.winner)
    this.loser = this.wrestlers.find(item => item.loser)

    this.winnerIds = this.wrestlers.reduce((prev, curr) => (curr.teamId === this.winner.teamId ? prev.concat(curr.id) : prev), [])
    this.loserIds = this.wrestlers.reduce((prev, curr) => (curr.teamId === this.loser.teamId ? prev.concat(curr.id) : prev), [])

    this.winners = this.roster.filter(item => includes(this.winnerIds, item.id))
    this.losers = this.roster.filter(item => includes(this.loserIds, item.id))
  }

  generate() {
    let wrestlers = this.roster.toJS()

    if (this.brandId !== null) {
      wrestlers = wrestlers.filter(item => item.brandId === this.brandId)
    }

    this.wrestlers = new List(randomiseWrestlers({ wrestlers, }))

    return this
  }

  simulate() {
    this.wrestlers = selectRandomResults(this.wrestlers.toJS())

    return this
  }

  switchChampionships() {
    const winnersHaveChampionships = this.winners.find(item => item.championshipId)

    if (!winnersHaveChampionships && this.loser && this.loser.championshipId) {
      const keyedChampionships = keyBy(this.championships.toJS(), "id")

      if (keyedChampionships[this.loser.championshipId]) {
        this.championship = keyedChampionships[this.loser.championshipId]

        this.processChampionships()
      }
    }

    return this
  }

  processChampionships() {
    const losers = this.losers.size
    const winners = this.winners.size

    if (losers === 1 && winners === 1) {
      this.roster = this.roster.map(wrestler => {
        if (includes(this.winnerIds, wrestler.id)) {
          wrestler.championshipId = this.championship.id
        } else if (includes(this.loserIds, wrestler.id) || wrestler.championshipId === this.championship.id) {
          wrestler.championshipId = null
        }

        return wrestler
      })
    }

    return this
  }

  savePoints() {
    this.getQuickKeys()

    if (!this.winner || !this.loser) {
      return this
    }

    this.roster = this.roster.map(wrestler => {
      if (includes(this.loserIds, wrestler.id)) {
        wrestler = wrestler.losses = wrestler.losses + POINTS_STEP

        if (wrestler.losses % 10 === 0) {
          wrestler.points = wrestler.points - POINTS_STEP
        }
      } else if (includes(this.winnerIds, wrestler.id)) {
        wrestler.wins = wrestler.wins + POINTS_STEP

        if (wrestler.wins % 10 === 0) {
          wrestler.points = wrestler.points + POINTS_STEP
        }
      }
      return wrestler
    })

    return this
  }

  getRoster() {
    return this.roster
  }

  getWrestlers() {
    return this.wrestlers
  }
}
