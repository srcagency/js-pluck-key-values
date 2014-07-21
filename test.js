'use strict';

var tape = require('tape');
var f = require('./');

tape(function( t ){

	var hash = {
		firstName: 'Thomas',
		lastName: 'Jensen',
		born: 1991,
		height: 'too little',
		feet: 42,
	};

	t.deepEqual(f(hash, [ 'lastName', 'feet' ]),  [ 'Jensen', 42 ]);
	t.deepEqual(f.usingMap(hash, [ 'lastName', 'feet' ]),  [ 'Jensen', 42 ]);
	t.deepEqual(f.usingFixed(hash, [ 'lastName', 'feet' ]),  [ 'Jensen', 42 ]);
	t.deepEqual(f.usingDynamic(hash, [ 'lastName', 'feet' ]),  [ 'Jensen', 42 ]);

	t.end();
});
