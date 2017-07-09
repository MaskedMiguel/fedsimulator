import moment from "moment"

export function getDateRange(startDate, stopDate) {
  let dateArray = []
  let currentDate = moment(startDate)
  stopDate = moment(stopDate)
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).toDate().toISOString())
    currentDate = moment(currentDate).add(1, "days")
  }
  return dateArray
}