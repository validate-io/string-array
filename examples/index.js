'use strict';

var isStringArray = require( './../lib' );

console.log( isStringArray( ['beep','','foo'] ) );
// returns true

console.log( isStringArray( [] ) );
// returns false

console.log( isStringArray( [1,2,3] ) );
// returns false
