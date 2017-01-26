// The first, reverseArray, takes an array as argument and produces 
// a new array that has the same elements in the inverse order.

var reverseArray = function(argArray) {
  //var newArray = argArray; // make new array be the argument array
  //newArray.push(6); // do a thing to it to verify that when you return the new one it's not actually the arg one
  
  var newArray = []; // make a blank new array
 
  // take each item in the array
  // write it to a new array
  // push adds to the END
  // unshift adds a task to the front, not end of the list
  
  for (var i = 0; i < argArray.length; i++) {
    //console.log(argArray[i]); // the value of each argArray item at index i
    //newArray.push(argArray[i]);
    // this gets you [1] [1, 2] [1, 2, 3] [1, 2, 3, 4] [1, 2, 3, 4, 5]
    // as expected because push adds to the END, and we are starting at the beginning, therefore we get the same order
    newArray.unshift(argArray[i]); // gets you [5, 4, 3, 2, 1] yay
  }
  
  return newArray; // return the new one
}

//var foo = [1, 2, 3, 4, 5];
//console.log(reverseArray(foo));
//foo.push(6);
//console.log(foo)

// OR:

var reverseArrayInPlace = function(argArray) {
  
  var newArray = [];
  for (var i = (argArray.length)-1; i >= 0; i--) {
   newArray.push(argArray[i]);
  }
  return newArray;
}



// TESTS
//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];




// reverseArrayInPlace, does what the reverse method does: 
// it modifies the array given as argument in order to reverse its elements. 


var reverseArrayInPlace = function(argArray) {
  // you can't clear out argArray first bc we have to read from it
  // shift gets and removes the front item from the list
  // so we want to read an item from argArray with shift
  // but this removes it so that borks the for loop length

  // take argArray, shift and concat
  length = argArray.length;
  console.log(length);
    for (var i = 0; i < length; i++) {
      //argArray.concat(argArray.shift(i)); // stuck here :(
    }
  
  return argArray;
}


var reverseArrayInPlace = function(argArray) {
  
  for (var i = 0; i < (argArray.length/2); i++) {
  var foo = argArray[i];
    argArray[i] = argArray[(argArray.length-1)-i];
  argArray[(argArray.length-1)-i] = foo;
    console.log(argArray[i]);
  }
  //return argArray;
  console.log(argArray);
}


var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
reverseArrayInPlace(arrayValue);
//console.log( reverseArrayInPlace(arrayValue) );
//console.log(arrayValue);

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]