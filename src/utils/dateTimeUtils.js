/**
 * Get current time in UTC unix timestamp or convert a time to UTC unix
 * @param unixTimestamp {Number} [optional] timestamp to use for date
 * @returns {number}
 */
export function getUTCUnix(unixTimestamp) {
  const d = new Date(unixTimestamp)
  const offset = d.getTimezoneOffset() * 60000
  return d.getTime() - offset
}

export const makeMillisecondsForDays = (days = 0) => (1000 * 60 * 60 * 24 * days)

export const milliTimes = {
  oneDay: (1000 * 60 * 60 * 24),
  oneWeek: (1000 * 60 * 60 * 24 * 7),
}

/**
 * Convert a UTC unix timestamp to local timezone
 * @param unixTimestamp {Number} [optional] timestamp
 * @returns {number}
 */
export function parseUTCUnix(unixTimestamp) {
  const d = new Date(unixTimestamp)
  const offset = d.getTimezoneOffset() * 60000
  return d.getTime() + offset
}

// returns milli time for 30 minutes from invokation time
export const tokenExpireMilliseconds = () => new Date(new Date().getTime() + (1000 * 60 * 30)).getTime()
