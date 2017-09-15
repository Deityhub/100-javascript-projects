/*
 * getPasswordsWithAtLeastTwoCapitalLetters
 *
 * A method that returns an array of passwords that contain
 * _at least_ two capital letters. >=2 (greater than or equal to 2)
 *
 */


// get the data object from the MOCK_DATA.json file
const data = require('../../data/MOCK_DATA.json');

function hasUppercaseCase(str) {
    var regexp = /[A-Z].*[A-Z]/;
    return str.match(regexp);
}

var getPasswordsWithAtLeastTwoCapitalLetters = function() {

    // create new array only of the passwords
    // just using filter below returns the entire
    // object, which fails the second test assertion
    var passwords = [];
    data.forEach(function(entry){
        passwords.push(entry.password)
    });

    passwordsWithAtLeastTwoCapitalLetters = passwords.filter(function(password){
        return hasUppercaseCase(password);
    });

    return passwordsWithAtLeastTwoCapitalLetters;
}

getPasswordsWithAtLeastTwoCapitalLetters();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters };
