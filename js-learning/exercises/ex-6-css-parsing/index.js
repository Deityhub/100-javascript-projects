var fs = require('fs');
var css = require('css');

// Your function should take as its arguments:
// - The full path to a CSS file.Use the Node File System API-- specifically, the`readFile` method-- to read the file.
// - A callback to call when processing is complete.The callback should receive two arguments: an error object, if any errors were encountered; and an array of rules that use vendor prefixes.
// Use the rework/css CSS parser to generate an object that represents the contents of the CSS file, which you can then traverse to identify places where vendor prefixes are used.


const parseCSS = function(path, callback) {
    fs.readFile(path, function (err, data) {

        
        // if there is an error reading the file
        if (err) {
            callback(err);
            return;
            // here, i need to return an error if it's invalid
        } else {
            // console.log("all good");
            // convert the data to a string so it can be read by css.parse
            var cssdata = data.toString();
    
            // parse the css
            var parsedcss = css.parse(cssdata, { source: path, silent: true });
            if (parsedcss.stylesheet.parsingErrors.length > 0) {
                console.log("this file is invalid css");
                // console.log(parsedcss.stylesheet.parsingErrors);
                callback(err);
            }
            
            // if this returns an error, callback(err)
            

            var allrules = parsedcss.stylesheet.rules;
            var ruletypeonly = allrules.filter((rule) => rule.type == 'rule');

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

            // console.log(selectors);
            return selectors;
        }


        callback(undefined, selectors);
        // here, we have to pass the error as undefined, since the data is the second param, and callback takes two args
    });
}

// parseCSS('/Users/eholladay/Documents/Projects/100-javascript-projects/js-learning/exercises/ex-6-css-parsing/test.css');


module.exports = parseCSS;
