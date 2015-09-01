'use strict';

var eslint = {};

eslint.ecmaFeatures = require( './ecmaFeatures.js' );
eslint.env = require( './env.js' );
eslint.rules = require( './rules' );


// EXPORTS //

module.exports = eslint;
