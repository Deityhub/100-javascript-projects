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

// use charAt instead of breaking into an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// then str.matches to see if it's a cap
// then count up the total number of caps
// see link Ashley sent to use array indices

function hasUppercaseCase(str) {
    var regexp = /[A-Z].*[A-Z]/;

    return str.match(regexp); // will either be null or return the match
    // for example [ 'ihaveFIVEUppercase', index: 0, input: 'ihaveFIVEUppercase' ]
    // output is kinda weird sometimes but if it's not null it matches the check of having 2+ uppercase! yay!
}

// console.log( hasUppercaseCase('ihavenouppercase') ); // null
// console.log( hasUppercaseCase('ihaveOneuppercase') ); // null
// console.log( hasUppercaseCase('ihaveTWouppercase') ); // 'TW', index 5
// console.log( hasUppercaseCase('ihaveTwouppercaseSeparated') ); // 'TwouppercaseS', index 5
// console.log( hasUppercaseCase('ihaveFIVEUppercase') ); // 'FIVEU', index 5
// console.log( hasUppercaseCase('Startwithoneuppercase') ); // null
// console.log( hasUppercaseCase('STartwithtwouppercase') ); // 'ST', index 0
// console.log( hasUppercaseCase('StartWithSeparated') ); // 'StartWithS', index 0 - weird output but works?
// console.log( hasUppercaseCase('12345698') ); // null
// console.log( hasUppercaseCase('12345698thenletters') ); // null
// console.log( hasUppercaseCase('12345698thenCAPS') ); // 'CAPS', index 12



var getPasswordsWithAtLeastTwoCapitalLetters = function() {

    // filter returns a new array, passwordsWithAtLeastTwoCapitalLetters
    var passwordsWithAtLeastTwoCapitalLetters = data.filter(function(entry){
        // console.log(entry.password);
        return hasUppercaseCase(entry.password);
        // ^ this returns me the entire entry, not just the PW
        // which might be fine? the reqs say,
        // "returns an array of passwords" so perhaps we need to
        // only get those?

    });

    return passwordsWithAtLeastTwoCapitalLetters;
    // console.log( passwordsWithAtLeastTwoCapitalLetters ); // see what's in passwordsWithAtLeastTwoCapitalLetters after check
    // console.log( passwordsWithAtLeastTwoCapitalLetters.length ); // how long is it?
    // the tests tell me that there should be 928 of them, out of 1000 in the data
}

getPasswordsWithAtLeastTwoCapitalLetters();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters };
