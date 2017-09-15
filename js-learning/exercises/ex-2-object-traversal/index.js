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
 * A method that returns an array *of names only* of the
 * people who have at least three cities.
 * The array should be alphabetically sorted on the last name.
 *
 */

var getPeopleWithAtLeastThreeCities = function() {

    var peopleWithAtLeastThreeCitiesObject = [];

    data.forEach(function(entry){
        var numCities = Object.keys(entry.cities).length;
        if (numCities >= 3) {
            peopleWithAtLeastThreeCitiesObject.push(entry);
        }
    });

    // take peopleWithAtLeastThreeCitiesObject array
    // and sort it (in place) alphabetically by last name
    peopleWithAtLeastThreeCitiesObject.sort(function(a, b){
        if(a.last < b.last) return -1;
        if(a.last > b.last) return 1;
        return 0;
    })

    // reduce peopleWithAtLeastThreeCitiesObject
    // start with new empty array which gets first+last as a string, no longer an object inside - but it's already sorted
    // var peopleWithAtLeastThreeCities = [ 'Elyse Holladay', 'Ashley Watkins'];
    var peopleWithAtLeastThreeCities = peopleWithAtLeastThreeCitiesObject.reduce(function(names, entry) {
        names.push(entry.first + " " + entry.last);
        return names;
    }, []); // , []); is the initial value e.g. names = []; empty array

    console.log(peopleWithAtLeastThreeCities[590]); // lol last = deKnevet
    // return peopleWithAtLeastThreeCities;

}

getPeopleWithAtLeastThreeCities();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters, getPeopleWithAtLeastThreeCities };
