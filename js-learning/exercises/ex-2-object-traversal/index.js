/*
 * getPasswordsWithAtLeastTwoCapitalLetters
 *
 * A method that returns an array of passwords that contain
 * _at least_ two capital letters. >=2 (greater than or equal to 2)
 *
 */


// get the data object from the MOCK_DATA.json file
const data = require('../../data/MOCK_DATA.json');

// console.log(data[3]); // references an item in the data array
// we have to use the number here because these don't have names
// console.log(data[0].password); // but this we can do because it has a name!
// console.log(data[0].cities[1].lat); // also works!

// in each item in the object, find the password item
// iterate over data until we reach the end (until iterator is = data.length)
// console.log(data.length); // which is 1000

function hasUppercaseCase(str) {
    return str.toLowerCase() != str;
}
// console.log( hasUppercaseCase('foo') ); // false, has no uppercase
// console.log( hasUppercaseCase('Foo') ); // true, has uppercase
// console.log( hasUppercaseCase('BAR') ); // true, has uppercase
// console.log( hasUppercaseCase('124kjf8DDDadasd') ); // true, has uppercase
// console.log( hasUppercaseCase('38rhalkd87ff') ); // false, has no uppercase
// console.log( hasUppercaseCase('38rhlkd87ffä') ); // false, ä is lowercase
// console.log( hasUppercaseCase('38rhlkd87ffÄ') ); // true, Ä is uppercase

for (i = 0; i < data.length; i++) {
    // console.log(data[i].password); // will spit out a loooong list of pws!
    var password = data[i].password;


    // check to see if there are capital letters in the password
    // how to check if there are capital letters? regex? toUpperCase?
    // console.log(hasUppercaseCase(password)); // looong list of trues/falses!
    if ( hasUppercaseCase(password) === true) {

    }

    // edge cases:
    // check if it's null
    // works with umlauts, etc
    // non-roman characters? yikes

};

// make a new array of passwords that DO contain +2 cap letters
// if there are more than two, add it to that new array
// if there are less than two, discard it (but don't
// remove it from the mock data obvs)

// the tests tell me that there should be 928 of them, out of 1000 in the data

var getPasswordsWithAtLeastTwoCapitalLetters = function() {
}


// module.exports = { getPasswordsWithAtLeastTwoCapitalLetters };
