## To Dos

* add ESLint to the repo ✅
* set up eslint as "recommended" config option, path `exercises/`, defaults elsewhere  ✅
* run linting in exercises/ and fix errors ✅
* fix/silence no-console ✅


## Notes

when installing, got the following `WARN`s:

pm WARN @indeed/eslint-plugin-indeed@5.0.0 requires a peer of eslint@4.x but none was installed.
npm WARN @indeed/eslint-plugin-indeed@5.0.0 requires a peer of eslint-plugin-react@7.x but none was installed.


### Errors

Interesting that running `lint-fix` would change my functions to arrow functions! var / const didn't surprise me nearly as much as that.

It also added `names.push(`${entry.first } ${ entry.last}`);` the backticks in this push. Why?
