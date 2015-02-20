/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isStringArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-string-array', function tests() {

	it( 'should export a function', function test() {
		expect( isStringArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isStringArray( ['a','b','c'] );
		assert.ok( bool );

		bool = isStringArray( [new String('a') ] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			function(){},
			[],
			{},
			[1,2,3],
			[1,'2',3],
			[[],[]]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isStringArray( value );
		}
	});

});
