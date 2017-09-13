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

for (i = 0; i < data.length; i++) {
    // console.log(data[i].password); // will spit out a loooong list of pws!
    var password = data[i].password;
    if (password != null) {
        console.log("password is not null, password is " + password);
    } // else, return
    // check to see if there are capital letters in the password

};

// make a new array of passwords that DO contain +2 cap letters
// if there are more than two, add it to that new array
// if there are less than two, discard it (but don't
// remove it from the mock data obvs)

// the tests tell me that there should be 928 of them, out of 1000 in the data

var getPasswordsWithAtLeastTwoCapitalLetters = function() {
}


// module.exports = { getPasswordsWithAtLeastTwoCapitalLetters };
