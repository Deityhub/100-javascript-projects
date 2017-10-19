// export a function that increments a counter from a start value 
// to an end value at a certain interval.

// The function takes an object as its sole argument.

// This object will have the following properties:
// `start`: a start value for a counter
// `end`: an end value for a counter
// `delay`: the time in milliseconds that should elapse between incrementing the counter
// `onIncrement`: a function to call with the current counter value each time the counter is incremented
// `callback`: a function to call after the counter reaches its end value

const counter = function(object) {
    // set num to value of start from obj
    // add 1 to num until it is = to end
    var num = object.start;
    console.log(num);

    const increment = function() {
        // num += 1;
        object.onIncrement(num++);
        // call increment recursively as long as num is less than end
        if (num <= object.end) {
            increment(num);
        }
    };
    // alternatively, call increment until num > end ?

    // this seems messy - i was expect setTimeout to call increment but that never worked
    setTimeout(function () {
        object.callback();
    }, object.delay); // every 100ms
    
    increment(num);
}


module.exports = counter;