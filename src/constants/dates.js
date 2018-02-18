import format from "date-fns/format"
import eachDay from "date-fns/each_day"
import lastDayOfMonth from "date-fns/last_day_of_month"
import addDays from "date-fns/add_days"
import _getDaysInMonth from "date-fns/get_days_in_month"
import _getDay from "date-fns/get_day"

export const pageTitle = date => format(new Date(date), "MMMM YYYY")
export const dateHeader = date => format(new Date(date), "Do")
export const addOneDay = date => addDays(date, 1)
export const getFirstDayOfMonth = date => new Date(new Date(date).getFullYear(), new Date(date).getMonth(), 1)
export const getLastDayOfMonth = date => lastDayOfMonth(new Date(date))
export const getMonthDateRange = date => eachDay(getFirstDayOfMonth(date), getLastDayOfMonth(date))
export const getDaysInMonth = date => _getDaysInMonth(new Date(date))
export const getDay = date => _getDay(date)
