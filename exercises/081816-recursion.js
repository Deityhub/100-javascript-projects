// Recursion 
// We’ve seen that % (the remainder operator) can be used to test whether a number 
// is even or odd by using % 2 to check whether it’s divisible by two.
// Here’s another way to define whether a positive whole number is even or odd:
// Zero is even. One is odd. 
// For any other number N, its evenness is the same as N - 2. 
// Define a recursive function isEven corresponding to this description. 
// The function should accept a number parameter and return a Boolean. 
// Test it on 50 and 75. See how it behaves on -1. 
// Why? Can you think of a way to fix this?

//var isEven = function(number) {
//	if (number - 2 === 0) {
//		return "this is zero and therefore even";
//	}
//    else {
		//isEven(number-2);
//      isEven(number-2);
//	}
//};
  
function isEven(number) {
  number = Math.abs(number);
  if (number == 0)
	return number + " is zero and therefore even! ";
    //return true;
  else if (number == 1 )
	return number + " is 1 and therefore odd! ";
    //return false;
  else
    return number + " - 2 is " + isEven(number - 2);
    //return isEven(number - 2);
}

//console.log(isEven(9)); 
//console.log(isEven(8)); 


// TESTS
//console.log(isEven(10));
// → true
//console.log(isEven(75));
// → false
console.log(isEven(-17));
// → ??
// when you give this function -1, it is not 0 or 1, and then it will try to subtract
// -2 from it over and over, obviously as it is negative it will never get to either
// 0 or 1, and therefore stack overflow!
// solution: check for negative and error
// solution: absolute number the input - this will tell you if the original input
// was even, even if negative
