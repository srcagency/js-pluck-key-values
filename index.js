'use strict';

module.exports = pluckKeyValuesFixed;
module.exports.usingFixed = pluckKeyValuesFixed;
module.exports.usingMap = pluckKeyValuesMap;
module.exports.usingDynamic = pluckKeyValuesDynamic;

function pluckKeyValuesFixed( hash, keys ){
	var list = new Array(keys.length);
	for (var i = keys.length - 1;i >= 0;i--)
		list[i] = hash[keys[i]];

	return list;
}

function pluckKeyValuesDynamic( hash, keys ){
	var list = [];
	for (var i = keys.length - 1;i >= 0;i--)
		list[i] = hash[keys[i]];

	return list;
}

function pluckKeyValuesMap( hash, keys ){
	return keys.map(function( key ){
		return hash[key];
	});
}
