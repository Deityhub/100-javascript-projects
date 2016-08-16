// FizzBuzz

// WORKING SOLUTION: https://jsfiddle.net/6s0a92ua/
// 🙈 🙉 🙊

// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
// When you have that working, modify your program to print "FizzBuzz", for 
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
// for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out 
// a significant percentage of programmer candidates. So if you solved it, 
// you’re now allowed to feel good about yourself.)

// steps:
// print all the numbers from 0 to 100
// then find ones divisible by 3: %3 == 0 and change the output to fizz
// find ones divisible by 5, change output to buzz
// you still have to output the number for the rest
// got stuck w/ printing BOTH fizz and buzz - concating the output

// is it bad to do this and then iterate to i <= 100?
// is there a preferred way to set i to 1 and not count 0 in the for loop?

// attempt one:

var i = 1;
for (i; i <= 100; i++) {
 console.log(i); // print 1 to 100, not 0
  // if a number if divisible by 3 — this code will print the number THEN this
  // this is where i got stuck the first time — need to change/add to the output
  if (i % 3 === 0) {
   console.log(i + "is a fizz");
  }
}

// attempt two:
// this order appropriately prints the fizz numbers and doesn't duplicate them
var i = 1;
for (i; i <= 100; i++) {
if (i % 3 === 0) {
   console.log(i + "is a fizz");
 }
 else {
  console.log(i);
 }
}

// attempt three:
var i = 1;
for (i; i <= 100; i++) {
if (i % 3 === 0) {
   console.log(i + "is a fizz");
 }
 else if (i % 5 === 0) {
     console.log(i + "is a buzz");
 }
 else {
  console.log(i);
 }
}

// attempt four:
// try to find the ones that are fizz AND buzz - in a different step to make sure that
// the stuff in #3 isn't conflicting

var i = 1;
for (i; i <= 100; i++) {
 // WRONG if (i % 3 && i % 5 === 0) {
 // gets me 5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100
 // because this is "i divisible by 3 (at all, even if remainder isn't 0) AND i divisible by 5 is 0"
 
  if (i % 3 === 0 && i % 5 === 0) {
 // SHOULD get 15, 30, 45, 60, 75, 90 - this does
    console.log(i + "fizzbuzz");
 }
}

// attempt five:
// with working fizzbuzz, add back in the fizz and buzz individually
// success! but this one makes me grouchy because LOL MATH — had to look at the soltn
// to make sure i was getting the right numbers (or do the math myself)
// much harder than being able to see that the output is correct or not!

var i = 1;
for (i; i <= 100; i++) { 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " fizzbuzz");
  }
  else if (i % 3 === 0) {
    console.log(i + " fizz");
  }
  else if (i % 5 === 0) {
      console.log(i + " buzz");
  }
  else {
  	console.log(i);
  }
}

// attempt six:
// in other solutions in EJ i saw this way of += the output into a var
// obviously output = "smth" overrides the value and nothing will output
// did NOT think of this myself but did this attempt w/o looking at other code
// also, emojis.

var i = 1;
for (i; i <= 100; i++) { 
  
  var output = "";
  
  if (i % 3 === 0 && i % 5 === 0) {
    output += "🙊";
  }
  else if (i % 3 === 0) {
    output += "🙈";
  }
  else if (i % 5 === 0) {
  output += "🙉";
  }
  else {
    output += i;
  }
  
  console.log(output);
  
}
