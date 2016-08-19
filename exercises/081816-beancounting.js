// Bean counting 
// You can get the Nth character, or letter, from a string by writing 
// "string".charAt(N), similar to how you get its length with "s".length. 
// The returned value will be a string containing only one character 
// (for example, "b"). The first character has position zero, which causes 
// the last one to be found at position string.length - 1. In other words, 
//  a two-character string has length 2, and its characters have positions 0 and 1. 
// Write a function countBs that takes a string as its only argument and returns 
// a number that indicates how many uppercase “B” characters are in the string. 

var countBs = function(string) {
    // find the length of the string that was passed in
    var length = string.length;

    // then recursively go thru the length til its 0
    // if the string.charAt returns a "B"
    // increment count output

    // stuck here, this code causes the EJ editor to crash, yikes!
    // for (length; length > 0; length++) {
    //     if (string.charAt(length - 1) === "B") {
    //         return "yes this is a b";
    //     }
    //     console.log("yes");
    // }
};


//var countBs = function(string) {
    // find the length of the string that was passed in
   var string = "BBC";
    var stringLength = string.length;
    //console.log(stringLength);

    var count = 0;

    // then recursively go thru the length til its 0
     var recurse = function(length) {
        if (length == 0) {
            return length;
        } else if (length > 0) {
          count = count+1;
          return "the count is " + count + " and the length is " + length + ".\n" + recurse(length - 1);
        }
     }
    console.log(recurse(stringLength));
  
    // if the string.charAt returns a "B"
    // increment count output
//}

// WORKING!
var countBs = function(string) {
    // find the length of the string that was passed in
    var stringLength = string.length;
    //console.log(stringLength);

    var count = 0;

    // then recursively go thru the length til its 0
     var recurse = function(length) {
       if (string.charAt(length - 1) === "B") {
            count = count+1;
        }
       if (length === 0) {
            //return length;
          return "done" ;
        } else if (length > 0) {
          //count = count+1;
          //return "the count is " + count + " and the length is " + length + ".\n" + recurse(length - 1);
          return recurse(length - 1);
        }
     }
    recurse(stringLength);
   //console.log("there are " + count + " Bs"); 
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countBs("Baby Banana Bicycle"));
// → 3


// Next, write a function called countChar that behaves like countBs, 
// except it takes a second argument that indicates the character that is
// to be counted (rather than counting only uppercase “B” characters). 
// Rewrite countBs to make use of this new function.

var countChar = function(string, character) {
    var stringLength = string.length;
    var count = 0;
     var recurse = function(length) {
       if (string.charAt(length - 1) === character) {
            count = count+1;
        }
       if (length === 0) {
          return "done" ;
        } else if (length > 0) {
          return recurse(length - 1);
        }
     }
    recurse(stringLength);
  return count;
}

console.log(countChar("Baby Banana Bicycle", "B"));
console.log(countChar("kakkerlak", "k"));
// → 4

// (this part was easy!!)