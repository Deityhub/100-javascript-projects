// export a function that increments a counter from a start value 
// to an end value at a certain interval.

// The function takes an object as its sole argument.

// This object will have the following properties:
// `start`: a start value for a counter
// `end`: an end value for a counter
// `delay`: the time in milliseconds that should elapse between incrementing the counter
// `onIncrement`: a function to call with the current counter value each time the counter is incremented
// `callback`: a function to call after the counter reaches its end value

const counter = function (object) {
    // set num to value of start from obj
    // add 1 to num until it is = to end
    var num = object.start;
    const increment = function() {
        num += 1;
        onIncrement(num);
        // call whatever as many times as start-end recursively
        // if num <= end
        increment(num);
    };
    setTimeout(increment, object.delay); // every 100ms
    object.callback();
}

module.exports = counter;


// user clicked
// doing things
fetch('/random-url', () => {
    // handle response
})

// I don't have access to the response because it's not back yet

// console.log(num);
// while (num <= object.end) {
//     // after the delay, increment num+=1
//     // and call onInc(num)
//     num += 1;
//     object.onIncrement(num);
// }
//     // settimeout with a delay of 100