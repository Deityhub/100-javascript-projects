const data = require('../../data/MOCK_DATA.json');

/*
 * hasMultipleUppercase
 *
 * A function that checks to see if a string contains
 * more than two uppercase characters.
 * Should not match a string with only one uppercase.
 * Should match a string with multiple uppercase chars
 * together, or separate, e.g. `ABCdef` and `AbcDef`
 *
 * Returns either `null` or the matched set and index.
 */
function hasMultipleUppercase(str) {
    var regexp = /[A-Z].*[A-Z]/;
    return str.match(regexp);
}


/*
 * getPasswordsWithAtLeastTwoCapitalLetters
 *
 * A method that returns an array of passwords that contain
 * _at least_ two capital letters. >=2 (greater than or equal to 2)
 *
 */
var getPasswordsWithAtLeastTwoCapitalLetters = function() {

    // create new array only of the passwords
    // just using filter below returns the entire
    // object, which fails the second test assertion
    var passwords = [];
    data.forEach(function(entry){
        passwords.push(entry.password)
    });

    var passwordsWithAtLeastTwoCapitalLetters = passwords.filter((password) => hasMultipleUppercase(password));


    return passwordsWithAtLeastTwoCapitalLetters;
}

getPasswordsWithAtLeastTwoCapitalLetters();


/*
 * getPeopleWithAtLeastThreeCities
 *
 * A method that returns an array of names of the
 * people who have at least three cities.
 * The array should be alphabetically sorted on the last name.
 *
 */

// check in the data object to see if cities is
// greater than or equal to 3 in length
// (also check if null?)
// then push that item to a new array
// then sort that new array alphabetically

var getPeopleWithAtLeastThreeCities = function() {

    var peopleWithAtLeastThreeCities = [];

    data.forEach(function(entry){
        var numCities = Object.keys(entry.cities).length;
        if (numCities >= 3) {
            peopleWithAtLeastThreeCities.push(entry);
        }
    });

    // take peopleWithAtLeastThreeCities array
    // and sort it (in place) alphabetically by last name
    peopleWithAtLeastThreeCities.sort(function(a, b){
        if(a.last < b.last) return -1;
        if(a.last > b.last) return 1;
        return 0;
    })

    return peopleWithAtLeastThreeCities;

}

getPeopleWithAtLeastThreeCities();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters, getPeopleWithAtLeastThreeCities };
