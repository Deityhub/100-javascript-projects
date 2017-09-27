const data = require('../../data/arraysOfArrays.js');

/*
 * sum
 *
 * A recursive function that adds up all of the numbers
 * in an array, and all the numbers in a sub-array.
 *
 * Returns the sum of a set of numbers, as a number.
 */

// start with simple array
const foo = [ 1, 2, 3, 4 ]; // 10
// can we use map here? do something to every item but get back a single number
// better: reduce - get a single value back, cumulatively

// at each index of the array
// in the first array, array[0]
// +add number to aggregator
// then go to the next array[N]
// until array[N] > array[0].length

const calculateSum = function() {
    const sum = foo.reduce(function(sum, num) {
        return sum + num;
    });

    return sum;
}

console.log(calculateSum());
calculateSum();

module.exports = { calculateSum };
