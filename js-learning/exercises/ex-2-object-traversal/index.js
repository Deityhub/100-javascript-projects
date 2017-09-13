/*
 * getPasswordsWithAtLeastTwoCapitalLetters
 *
 * A method that returns an array of passwords that contain
 * _at least_ two capital letters. >=2 (greater than or equal to 2)
 *
 */


// get the data object from the MOCK_DATA.json file
// const data = require('../../data/MOCK_DATA.json');

// console.log(data[3]); // references an item in the data array
// we have to use the number here because these don't have names
// console.log(data[0].password); // but this we can do because it has a name!
// console.log(data[0].cities[1].lat); // also works!

// in each item in the object, find the password item
// iterate over data until we reach the end (until iterator is = data.length)
// console.log(data.length); // which is 1000

function hasUppercaseCase(str) {
    // return str.toLowerCase() != str;
    // this is 💩, let's try match() instead

    var test = str; // test string
    var regexp = /^(?=.*[A-Z]{2,}).+$/; // regexp to check for 2+ {2,} caps

    return str.match(regexp); // will either be null or return the match
    // for example [ 'ihaveFIVEUppercase', index: 0, input: 'ihaveFIVEUppercase' ]

}

console.log( hasUppercaseCase('foo') );                 // null
console.log( hasUppercaseCase('Foo') );                 // null
console.log( hasUppercaseCase('BAR') );                 // match
console.log( hasUppercaseCase('ihavenouppercase') );    // null
console.log( hasUppercaseCase('ihaveOneuppercase') );   // null
console.log( hasUppercaseCase('ihaveTWouppercase') );   // match
console.log( hasUppercaseCase('ihaveFIVEUppercase') );  // match
console.log( hasUppercaseCase('12345698') );            // null
console.log( hasUppercaseCase('ABC131424') );           // match
console.log( hasUppercaseCase('ABCdef938585') );        // match
console.log( hasUppercaseCase('1837defo98258') );       // null
console.log( hasUppercaseCase('858ABDJ2875') );         // match
console.log( hasUppercaseCase('85!!!8ABDJ2875') );      // match


var getPasswordsWithAtLeastTwoCapitalLetters = function() {

    // make a new blank array of passwords w/ caps
    const passwordsWithAtLeastTwoCapitalLetters = [];

    for (i = 0; i < data.length; i++) {
        // console.log(data[i].password); // will spit out a loooong list of pws!
        var password = data[i].password;

        // check to see if there are capital letters in the password
        // how to check if there are capital letters? regex? toUpperCase?
        // console.log(hasUppercaseCase(password)); // looong list of trues/falses!

        // this just checks if there is ONE capital letter, not TWO
        // if ( hasUppercaseCase(password) === true) { == 986 items

        // if there are more than two, add it to that new array
        // if there are less than two, discard it (but don't
        // remove it from the mock data obvs)

        // check to see if there are two
        if ( hasUppercaseCase(password) === true) {
            passwordsWithAtLeastTwoCapitalLetters.push(password); // push to new array
        }

        // edge cases:
        // check if it's null
        // works with umlauts, etc
        // non-roman characters? yikes

    };

    // console.log( passwordsWithAtLeastTwoCapitalLetters ); // see what's in passwordsWithAtLeastTwoCapitalLetters after check
    // console.log( passwordsWithAtLeastTwoCapitalLetters.length ); // how long is it?
    // the tests tell me that there should be 928 of them, out of 1000 in the data
}

// getPasswordsWithAtLeastTwoCapitalLetters();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters };
