ESLint Config
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) shareable [config](http://eslint.org/docs/developer-guide/shareable-configs).

This [ESLint](http://eslint.org/) config follows the style guide documented [here](https://github.com/kgryte/javascript-style-guide).


## Installation

``` bash
$ npm install eslint-config-kgryte
```


## Usage

### Config

To extend the configuration in an `.eslintrc` file,

``` javascript
{
	'extends': 'kgryte'
}
```

where `kgryte` is a shorthand for `eslint-config-kgryte`. To override configuration settings, add them directly to the `.eslintrc` file.

``` javascript
{
	'extends': 'kgryte',
	'rules': {
		'semi': [ 2, 'never' ]
	}
}
```


### Module

To use the configuration as a Node module,

``` javascript
var config = require( 'eslint-config-kgryte' );
```

Any modifications can be subsequently published to [NPM](https://www.npmjs.com/) as a new shareable [config](http://eslint.org/docs/developer-guide/shareable-configs).


#### config

[ESLint](http://eslint.org/) shareable [config](http://eslint.org/docs/developer-guide/shareable-configs).

``` javascript
console.dir( config );
/*
	{
		'env': {...},
		'rules': {...},
		'ecmaFeatures': {...}
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	config = require( 'eslint-config-kgryte' );

// Override configuration settings...
merge( config.rules, {
	'semi': [ 2, 'never' ]
});

console.dir( config );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-config-kgryte.svg
[npm-url]: https://npmjs.org/package/eslint-config-kgryte

[travis-image]: http://img.shields.io/travis/kgryte/eslint-config-kgryte/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-config-kgryte

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-config-kgryte/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-config-kgryte?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-config-kgryte.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-config-kgryte

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-config-kgryte.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-config-kgryte

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-config-kgryte.svg
[github-issues-url]: https://github.com/kgryte/eslint-config-kgryte/issues
