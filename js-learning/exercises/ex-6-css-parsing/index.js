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

        // this fails with
        // return this.mapVisit(node.stylesheet.rules, '\n\n');
        // TypeError: Cannot read property 'rules' of undefined
        // var result = css.stringify(data);
        
        
        
        
        // these two lines as written fail with
        //     if ('/' != css.charAt(0) || '*' != css.charAt(1)) return;
        // TypeError: css.charAt is not a function
        // var obj = css.parse(data);
        // console.log(css.stringify(obj));
        // as does this one:
        // var result = css.parse(data, { source: './test.css' });
        // because data isn't yet a css file?
        var cssdata = data.toString();
        // console.log(cssdata);
        var result = css.parse(cssdata, { source: path });
        console.log(result); // there we go
        // now we have to sort thru these and find declaration types
        // and then of those which ones start with a dash
        // object, stylesheet obj, rules array, object inside that array with some number value
        // (obj 9 in this case is <html> and has a prefixed selector)
        // object[9].declarations.object[n].property = starts with a dash "-webkit-text-size-adjust"
        // object[9].type = rule
        // object[9].selectors[0] = html
        // the type=rule inside this object we want to reduce and get only the objects that are rules
        // then for the objs that are rules, find the declarations obj, property value
        // if the prop value starts with a dash
        // then reduce on that and output an object with the selector
        
    });
}

// TODO
// "full path to a CSS file" - is there a way to enforce or require absolute paths, or does a relative path count?
// parseCSS('./test.css');
parseCSS('/Users/eholladay/Documents/Projects/100-javascript-projects/js-learning/exercises/ex-6-css-parsing/test.css');


// var obj = css.parse('body { font-size: 12px; }');
// console.log( css.stringify(obj) );


module.exports = parseCSS;
