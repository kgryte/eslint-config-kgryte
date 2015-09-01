'use strict';

// MODULES //

var merge = require( 'utils-merge2' )();


// RULES //

var rules = merge(
	{},
	require( './errors.js' ),
	require( './best_practices.js' )
);


// EXPORTS //

module.exports = rules;