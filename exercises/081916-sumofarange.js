The sum of a range

The introduction of this book alluded to the following as a nice way to compute
the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an
array containing all the numbers from start up to (and including) end. Next,
write a sum function that takes an array of numbers and returns the sum of these
numbers. Run the previous program and see whether it does indeed return 55.

// Write a range function that takes two arguments, start and end
// returns an array containing all the numbers from start up to (and including) end.

var range = function(start, end) {
  console.log("start is " + start + " and end is " + end);
  var array = [2, 3, 5];
  array.push(4);
  console.log(array);
  // for each number starting at start and ending at end
  // add them to an array
}

range(1,5);


// Write a range function that takes two arguments, start and end
// returns an array containing all the numbers from start up to (and including) end.

var range = function(start, end) {
  console.log("start is " + start + " and end is " + end);
  
  var array = [];
  
  //var array = [2, 3, 5];
  //array.push(4);
  // console.log(array);
  // for each number starting at start and ending at end
  for (i = start; i <= end; i++) {
    //console.log(i);
    array.push(i); // push each number in the range to the array
    //console.log(array);
  }
 
  // the array now contains the range from start to end
  console.log(array);
}

range(1,5);


// write a sum function that takes an array of numbers
// returns the sum of these numbers. 


// Write a range function that takes two arguments, start and end
// returns an array containing all the numbers from start up to (and including) end.

var range = function(start, end) {
  //console.log("start is " + start + " and end is " + end);
  
  var array = [];
  
  //var array = [2, 3, 5];
  //array.push(4);
  // console.log(array);
  // for each number starting at start and ending at end
  for (i = start; i <= end; i++) {
    //console.log(i);
    array.push(i); // push each number in the range to the array
    //console.log(array);
  }
 
  // the array now contains the range from start to end
  return array;
}

console.log(range(1,5)); // → [1, 2, 3, 4, 5]


// write a sum function that takes an array of numbers
// returns the sum of these numbers. 

var sum = function(listOfNumbers) {
  // listOfNumbers has to be an array
  //console.log(typeof listOfNumbers); - this returns object?
  
  var sum = 0; // argh! this has tripped me up twice, you have to declare this OUTSIDE the for loop or it just rewrites it every time 😫
  
  // for each number in the list of numbers
  for (i = 0; i <= 5; i++) {
    // get the next number
    var nextNumber = listOfNumbers.pop();
    console.log("next number is " + nextNumber);
    // add it to itself
    sum += nextNumber;
    console.log("and the sum is now " + sum);
    //return sum;
  }
  //console.log(sum);
};

foo = [1, 2, 3, 4, 5];
sum(foo);






// TESTS
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Write a range function that takes two arguments, start and end
// returns an array containing all the numbers from start up to (and including) end.

var range = function(start, end) {
  //console.log("start is " + start + " and end is " + end);
  
  var array = [];
  
  //var array = [2, 3, 5];
  //array.push(4);
  // console.log(array);
  // for each number starting at start and ending at end
  for (i = start; i <= end; i++) {
    //console.log(i);
    array.push(i); // push each number in the range to the array
    //console.log(array);
  }
 
  // the array now contains the range from start to end
  return array;
}

//console.log(range(1,5)); // → [1, 2, 3, 4, 5]


// write a sum function that takes an array of numbers
// returns the sum of these numbers. 

var sum = function(listOfNumbers) {  
  var sum = 0;
  
  // for each number in the list of numbers
  // get the first number so that you know where to start
  var start = listOfNumbers[0];
  //console.log(start);
  var end = listOfNumbers[listOfNumbers.length - 1]; // YESSS first try 😎
  //console.log(end);
  
  // get the last number so that you know where to end
  for (i = start; i <= end; i++) {
    // get the next number
    var nextNumber = listOfNumbers.pop();
    //console.log("next number is " + nextNumber);
    // add it to itself
    sum += nextNumber;
    //console.log("and the sum is now " + sum);
  }
  return sum;
  //console.log(sum);
};

foo = [1, 2, 3, 4, 5];
banana = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(sum(foo)); //  → 15
//console.log(sum(banana)); //  → 55


// TESTS
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // FAIL, why?
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55



As a bonus assignment, modify your range function to take an optional third argument
that indicates the “step” value used to build up the array. If no step is given,
the array elements go up by increments of one, corresponding to the old
behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make
sure it also works with negative step values so that range(5, 2, -1) produces
[5, 4, 3, 2].
