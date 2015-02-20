/**
*
*	VALIDATE: string-array
*
*
*	DESCRIPTION:
*		- Validates if a value is a string array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isString = require( 'validate.io-string' );


// IS STRING ARRAY //

/**
* FUNCTION: isStringArray( value )
*	Validates if a value is a string array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a string array
*/
function isStringArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isString( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isStringArray()


// EXPORTS //

module.exports = isStringArray;
