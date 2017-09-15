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
    // return str.toLowerCase() != str;
    // this is 💩, let's try match() instead

    // var test = str; // test string
    // var regexp = /^(?=.*[A-Z]{2,}).+$/; // this catches two or more caps TOGETHER, e.g. ABCdskfj but not AkjdC
    // TODO thing to try: [A-Z].*[A-Z]

    // return str.match(regexp); // will either be null or return the match
    // for example [ 'ihaveFIVEUppercase', index: 0, input: 'ihaveFIVEUppercase' ]

    var str = str;
    var count = 0;
    var pos = str.indexOf('e'); // works
    // var pos = str.indexOf(/^A-Z/); // doesn't work
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search ???

    while (pos !== -1) {
      count++;
      pos = str.indexOf('e', pos + 1); // works
    //   pos = str.indexOf(/^A-Z/, pos + 1); // doesn't work
    }

    console.log(count);
}

hasUppercaseCase('foo');
hasUppercaseCase('fooey');
hasUppercaseCase('Foo');
hasUppercaseCase('BAR');
hasUppercaseCase('ihavenouppercase');
hasUppercaseCase('ihaveOneuppercase');
hasUppercaseCase('ihaveTWouppercase');
hasUppercaseCase('ihaveFIVEUppercase');
hasUppercaseCase('12345698');
hasUppercaseCase('ABC131424');
hasUppercaseCase('ABCdef938585');
hasUppercaseCase('1837deeeeEeeeeEEEefo98258');
hasUppercaseCase('858ABDJ2875');
hasUppercaseCase('85!!!8ABDJ2875');


var getPasswordsWithAtLeastTwoCapitalLetters = function() {

    // make a new blank array of passwords w/ caps
    const passwordsWithAtLeastTwoCapitalLetters = [];

    // use array.filter here instead?
    // if you don't need to return a new array, use for each
    // then you don't have to keep track of i
    // array filter's check can be another function
    for (i = 0; i < data.length; i++) {
        // console.log(data[i].password); // will spit out a loooong list of pws!
        var password = data[i].password;

        console.log(password);


        // if there are more than two, add it to that new array
        // if there are less than two, discard it (but don't
        // remove it from the mock data obvs)

        // check to see if there are two
        // if ( hasUppercaseCase(password) === null) {
        //     // console.log("i don't have uppercases, hasUppercaseCase returned null")
        // } else {
        //     // console.log("i do have uppercases")
        //     passwordsWithAtLeastTwoCapitalLetters.push(password); // push to new array
        // }

        // console.log( hasUppercaseCase(password) );

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
