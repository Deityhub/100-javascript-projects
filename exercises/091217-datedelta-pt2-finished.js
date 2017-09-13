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

    // number, unit, "ago" or nothing (future)
    var startInMs = new Date(start).getMilliseconds;
    console.log("start time in ms" + startInMs);

    // convert delta from "one hour ago" format to a number, then to ms
    // split "one hour ago" on number, unit, and pos/neg time
    var deltaSplit = delta.split(' ');
    // console.log(deltaSplit);
    // check to make sure the split array is the right length
    // if it's like, ten, maybe that's bad input data, etc
    if (deltaSplit.length > 3 || deltaSplit.length < 2) {
        console.log("too short or too long " + deltaSplit.length);
        return;
    }

    // if (typeof deltaSplit[0] !== 'number') {
    //     console.log("delta isn't a number");
    //     return;
    // }
    var deltaNumber = parseInt(deltaSplit[0]);
    var deltaUnit = deltaSplit[1].replace(/s$/, ""); // "hours" --> "hour"
    // console.log(deltaUnit);

    // check the unit (deltaUnit) and use it to convert deltaNumber to ms

    const conversions = [
        { cf: 1, fromUnit: 'ms' },
        { cf: 1000, fromUnit: 'second' },
        { cf: 60, fromUnit: 'minute' },
        { cf: 60, fromUnit: 'hour' },
        { cf: 24, fromUnit: 'day' },
        { cf: 30, fromUnit: 'month' },
        { cf: 12, fromUnit: 'year' }
    ];

    var conversionMap = new Map();

    var multiplier = 1;

    conversions.forEach(function(c) {
        multiplier = multiplier * c.cf;
        conversionMap.set(c.fromUnit, multiplier);
    });

    console.log(conversionMap);

    multiplier = conversionMap.get(deltaUnit);
    console.log("multiplier is " + multiplier);
    if (!multiplier) {
        console.log("no unit")
        return;
    }

    deltaNumber = deltaNumber * multiplier;
    console.log("delta number is " + deltaNumber);
    var original = new Date(startInMs - deltaNumber);
    console.log("original time is " + original);
    var originalAsDate = original.toDateString();

    // return original;

}

applyTimeDelta();
