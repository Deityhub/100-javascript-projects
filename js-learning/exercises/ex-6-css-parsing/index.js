var fs = require('fs');
var css = require('css');

// Your function should take as its arguments:
// - The full path to a CSS file.Use the Node File System API-- specifically, the`readFile` method-- to read the file.
// - A callback to call when processing is complete.The callback should receive two arguments: an error object, if any errors were encountered; and an array of rules that use vendor prefixes.
// Use the rework/css CSS parser to generate an object that represents the contents of the CSS file, which you can then traverse to identify places where vendor prefixes are used.


const parseCSS = function(path, callback) {
    fs.readFile(path, function (err, data) {
        if (err) {
            callback(err); // second param (the data) is automatically undefined if not passed
            return; // don't need this for the callback
        }

        var cssdata = data.toString(); // because data isn't yet a css
        var parsedcss = css.parse(cssdata, { source: path });
        
        var allrules = parsedcss.stylesheet.rules;
        var ruletypeonly = allrules.filter((rule) => rule.type == 'rule');
        // console.log(ruletypeonly);

        var foo = [];

        ruletypeonly.forEach((rule) => {
            rule.declarations.forEach((declaration) => {
                if (declaration.property.charAt(0) == '-') {
                    foo.push(rule.selectors);
                }
            })
            // console.log(foo);
        });

        // deduplicate
        var selectors = foo.filter(function (elem, pos) {
            return foo.indexOf(elem) == pos;
        });

        console.log(selectors);

        // callback(undefined, whateverthedataarrayis);
        // here, we have to pass the error as undefined, since the data is the second param, and callback takes two args
    });

}

parseCSS('/Users/eholladay/Documents/Projects/100-javascript-projects/js-learning/exercises/ex-6-css-parsing/test.css');


module.exports = parseCSS;
