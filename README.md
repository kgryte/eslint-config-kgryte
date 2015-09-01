ESLint Config
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) config.


## Installation

``` bash
$ npm install eslint-config-kgryte
```


## Usage

``` javascript
var config = require( 'eslint-config-kgryte' );
```

#### config

[ESLint](http://eslint.org/) config.

``` javascript
console.log( config );
/*

*/
```


## Examples

``` javascript
var config = require( 'eslint-config-kgryte' );
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
