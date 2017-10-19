// export a function that increments a counter from a start value 
// to an end value at a certain interval.

// The function takes an object as its sole argument.

// This object will have the following properties:
// `start`: a start value for a counter
// `end`: an end value for a counter
// `delay`: the time in milliseconds that should elapse between incrementing the counter
// `onIncrement`: a function to call with the current counter value each time the counter is incremented
// `callback`: a function to call after the counter reaches its end value

const testobj = { start: 1, end: 10 }

const counter = function (object) {
    // foo is 0
    // set foo to value of start from obj
    // add 1 to foo until it is = to end
    var foo = 0;
    console.log(foo);
    while (foo <= testobj.end) {
        console.log(foo);
        // here, use settimeout to wait the delay time before incrementing
        foo += 1; // instead of this, call onIncrement 
    }
    // ...callback? 😬
}

counter(testobj);

module.exports = counter;
