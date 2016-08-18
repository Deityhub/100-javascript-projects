// Minimum
// The previous chapter introduced the standard function Math.min that 
// returns its smallest argument. We can do that ourselves now.
// Write a function min that takes two arguments and returns their minimum.

// take argument a and argument b
var min = function(a, b) {
  var minimum = null; // define minimum var
  // compare which of a and b is greater
  if (a > b) {
    return b;
  } else if (b > a) {
    return a;
  } else if (arguments.length == 0) {
    return "you didn't pass in any arguments";
  } else if (a === b) {
    return a + " equals " + b;
  }
  else {
    return;
    // got a working state to here, first try, yay! 
    // next, check for a state where a and b are equal - yes
    // next, check for a state where no parameters are passed in
    // got stuck here - how do you check the typeof an arg, if it was or was not passed in?
    // had to look it up in the EJ book, remembered reading... arguments.length!
    // also got stuck where i had the a === b state before the no args state
    // and the === state I had the return as "these are equal"
    // so it took me a bit to tell that i was getting that state instead of the no args state
    // bc it was giving me "undefined === undefined" when there were no args
    // which is different! reordering them worked.
  }
};




// Tests:
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(2, 2));
// → should get "2 equals 2"
 console.log(min());
// → should get "no args"
