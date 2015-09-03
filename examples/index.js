'use strict';

var merge = require( 'utils-merge2' )(),
	config = require( './../lib' );

// Override configuration settings...
merge( config.rules, {
	'semi': [ 2, 'never' ]
});

console.dir( config );
