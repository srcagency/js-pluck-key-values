# Pluck key values

Pluck the values of an array of keys from an object (order is preserved)

## usage

	var pluckKeyValues = require('pluck-key-values');

	pluckKeyValues({
		firstName: 'Simon',
		lastName: 'Bells',
		age: 28,
	}, [ 'age', 'firstName' ]); // [ 28, 'Simon' ]

## License

[MIT](http://opensource.org/licenses/MIT) © [Thomas Jensen](http://src.agency)
