import randomiseWrestlers from "./randomise-wrestlers"
import selectRandomResults from "./select-random-results"

import { POINTS_STEP } from "../constants/game"

class Match {
  getWrestlers = () => {
    return this.wrestlers ? this.wrestlers : []
  }
  getWinner = () => {
    return this.wrestlers.find(item => item.winner)
  }
  getLoser = () => {
    return this.wrestlers.find(item => item.loser)
  }
  setChampionships = championships => {
    this.championships = championships
    return this
  }
  setWrestlers = wrestlers => {
    this.wrestlers = wrestlers
    return this
  }
  randomiseTeams = wrestlers => {
    this.wrestlers = randomiseWrestlers({ wrestlers, })
    return this
  }
  simulate = () => {
    this.wrestlers = selectRandomResults(this.wrestlers)
    return this
  }
  moveChampionship = () => {
    const loserIndex = this.wrestlers.findIndex(item => item.loser)
    const winnerIndex = this.wrestlers.findIndex(item => item.winner)

    if (loserIndex > -1 && winnerIndex > -1) {
      const loser = this.wrestlers[loserIndex]
      const winner = this.wrestlers[winnerIndex]

      const sameBrand = loser.brandId === winner.brandId
      const sameGender = loser.gender === winner.gender

      const loserChampionship = loser.championshipId || ""
      const winnerChampionship = winner.championshipId || ""

      if (sameBrand && sameGender && loserChampionship.length > 0 && winnerChampionship.length === 0) {
        this.wrestlers[winnerIndex].championshipId = loser.championshipId
        this.wrestlers[loserIndex].championshipId = null
      }
    }

    return this
  }
  updateWinLossRecord = () => {
    const winnerIndex = this.wrestlers.findIndex(item => item.winner)
    const loserIndex = this.wrestlers.findIndex(item => item.loser)

    if (winnerIndex > -1) {
      this.wrestlers[loserIndex].losses += 1
      this.wrestlers[winnerIndex].wins += 1
    }
    return this
  }
  updatePoints = () => {
    const loserIndex = this.wrestlers.findIndex(item => item.winner)
    const winnerIndex = this.wrestlers.findIndex(item => item.loser)

    if (winnerIndex > -1 && this.wrestlers[winnerIndex].wins % 10 === 0) {
      this.wrestlers[winnerIndex].points = this.wrestlers[winnerIndex].points + POINTS_STEP
    }
    if (loserIndex > -1 && this.wrestlers[loserIndex].losses % 10 === 0) {
      this.wrestlers[loserIndex].points = this.wrestlers[loserIndex].points - POINTS_STEP
    }

    return this
  }
}

export default Match
