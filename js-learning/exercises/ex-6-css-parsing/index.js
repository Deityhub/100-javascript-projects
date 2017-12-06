var fs = require('fs');
var css = require('css');

// Your function should take as its arguments:
// - The full path to a CSS file.Use the Node File System API-- specifically, the`readFile` method-- to read the file.
// - A callback to call when processing is complete.The callback should receive two arguments: an error object, if any errors were encountered; and an array of rules that use vendor prefixes.
// Use the rework/css CSS parser to generate an object that represents the contents of the CSS file, which you can then traverse to identify places where vendor prefixes are used.


const parseCSS = function(path) {
    fs.readFile(path, function (err, data) {
        if (err) {
            return console.error(err);
        }
        // console.log(data.toString());
        // create here an array of rules that use vendor prefixes
        // so we need to pass `data` to the rework css parser
        // and then find properties that start with a dash?
    });
}

// TODO
// "full path to a CSS file" - is there a way to enforce or require absolute paths, or does a relative path count?
// parseCSS('./test.css');
// parseCSS('/Users/eholladay/Documents/Projects/100-javascript-projects/js-learning/exercises/ex-6-css-parsing/test.css');


// var obj = css.parse('body { font-size: 12px; }');
// console.log( css.stringify(obj) );


module.exports = parseCSS;
