/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	config = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'eslint-config-kgryte', function tests() {

	it( 'should export an object', function test() {
		expect( config ).to.be.an( 'object' );
	});

	it( 'should have an `env` property', function test() {
		assert.property( config, 'env' );
	});

	it( 'should have a `rules` property', function test() {
		assert.property( config, 'rules' );
	});

	it( 'should have a `ecmaFeatures` property', function test() {
		assert.property( config, 'ecmaFeatures' );
	});

});
