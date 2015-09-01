'use strict';

var features = {};

// Allow the new `u` (unicode) regexp flag to be recognized. See [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}.
features.regexUFlag = true;

// Allow the new `y` (sticky) regexp flag to be recognized. See [New ECMAScript 6 Flags]{@link http://eslint.org/docs/rules/no-invalid-regexp#new-ecmascript-6-flags}.
features.regexYFlag = true;


// EXPORTS //

module.exports = features;
