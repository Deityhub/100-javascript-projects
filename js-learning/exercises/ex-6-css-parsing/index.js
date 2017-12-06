var fs = require('fs');


// Your function should take as its arguments:
// - The full path to a CSS file.Use the Node File System API-- specifically, the`readFile` method-- to read the file.
// - A callback to call when processing is complete.The callback should receive two arguments: an error object, if any errors were encountered; and an array of rules that use vendor prefixes.

const parseCSS = function(path) {
    fs.readFile(path, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Result of the Asynchronous read: " + data.toString());
    });
}

parseCSS('./test.css');


module.exports = parseCSS;
