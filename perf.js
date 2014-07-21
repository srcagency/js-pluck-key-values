'use strict';

var f = require('./');

var hash = {
	firstName: 'Thomas',
	lastName: 'Jensen',
	born: 1991,
	height: 'too little',
	feet: 42,
};

var keys = [ 'lastName', 'feet', 'born', 'firstName' ];

test([ f.usingDynamic, f.usingMap, f.usingFixed ], 1000000, hash, keys);

function test( imps, times ){
	var args = Array.prototype.slice.call(arguments, 2);

	console.log(args);

	for (var i = 0;i < imps.length;i++)
		time(i + ': ' + imps[i].name, imps[i], times, args);
}

function time( name, fn, times, args ){
	console.time(name);

	for (var i = 0;i < times;i++)
		fn.apply(null, args);

	console.timeEnd(name);
}
