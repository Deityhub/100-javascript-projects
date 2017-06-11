https://glitch.com/edit/#!/silver-vacuum?path=public/client.js:37:24

/*
 * Return a date interval as a human-friendly string
 *
 * Given two Dates, this function returns a string like '2 days ago' or '10
 * minutes from now' that represents the most significant unit of the time
 * delta from the first date to the second.
 *
 * If the first date is omitted, the current date and time will be used instead.
 *
 * @param {Date} [start=now] - the start of the time range
 * @param {Date} end - the end of the time range
 *
 * @returns {String} A string quantifying the range in terms of its most
 *   significant unit ('2 hours ago', e.g.)
 */
function getTimeDelta(start, end) {
}

/*
 * Return the date obtained by applying a time delta string to a date
 *
 * Given a Date and a time delta string of the format returned by
 * getTimeDeltaString, return the Date resulting from applying the time delta to
 * the provided date. For example, given a Date representing noon on Jan 1 1997
 * and the string 'one hour ago', return a Date representing 11am on Jan 1 1997.
 *
 * @param {Date} start - the date to start from
 * @param {String} delta - the time delta to apply
 *
 * @returns {Date} the date resulting from applying delta to start
 */
function applyTimeDelta(start, delta) {
}
