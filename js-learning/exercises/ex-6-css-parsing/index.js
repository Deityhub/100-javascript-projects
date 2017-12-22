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
        } else {
            // convert the data to a string so it can be read by css.parse
            var cssdata = data.toString();
    
            // parse the css
            var parsedcss = css.parse(cssdata, { source: path, silent: true });

            // if invalid, parsedcss object has a parsingErrors obj in it, callback error
            if (parsedcss.stylesheet.parsingErrors.length > 0) {
                const err = parsedcss.stylesheet.parsingErrors;
                callback(err);
                return;
            }

            // get the rules object out
            const allrules = parsedcss.stylesheet.rules;
            // console.log(allrules);
            // console.log(allrules[51]);
            // console.log(allrules[51].declarations);
            // console.log(allrules[53]);
            // console.log(allrules[53].rules.declarations);

            // look (recursively?) in each rule
            // because there's a `rules` object inside some of them
            // to find the declarations object

            // check if a prop is a vendor prop
            const checkIfVendorProp = function(declarations) {
                var hasVendorProp = false;
                declarations.forEach((declaration) => {
                    // don't need to actually go over every one, just need to get to a first prop w vendor prefix -- refactor
                    if (declaration.property.charAt(0) == '-') {
                        // console.log("true" + declaration.property);
                        hasVendorProp = true;
                    } 
                });
                // console.log(hasVendorProp) // returns true or false for each one
                return hasVendorProp;
            }

            var selectorsWithVendorProps = [];

            const findDeclarations = function(rule) {
                if (rule.type == "rule") {
                    // is there a declarations object
                    if (rule.declarations) {
                        // if there is, check it for vendor prefixes
                        var hasVendorProps = checkIfVendorProp(rule.declarations); // will give me back true or false
                        // console.log(hasVendorProps)
                        if (hasVendorProps == true) {

                            // and get the selectors object (back up a level)
                            selectorsWithVendorProps = selectorsWithVendorProps.concat(rule.selectors);
                        }
                    }
                } else if (rule.type == "media") {
                    
                        // here - if there are 2 selectors inside a mediaquery, there's 2 rule objects
                        // console.log("more than one rules");
                        rule.rules.forEach((rule) => {
                            findDeclarations(rule);
                        })

                }
            }
                // see if there is a declarations object
                // if not, see if there is a rules object
                // and then see if there is a declarations object
                
                const types = {};

                
                // inside each rule in allrules
                allrules.forEach((rule) => {
                    // types[rule.type] = "true";
                    findDeclarations(rule);
                });
                // console.log(types);

            console.log(selectorsWithVendorProps);

            
            callback(undefined, selectorsWithVendorProps);
        }
    });
}

// parseCSS('/Users/eholladay/Documents/Projects/100-javascript-projects/js-learning/exercises/ex-6-css-parsing/test.css');


module.exports = parseCSS;
