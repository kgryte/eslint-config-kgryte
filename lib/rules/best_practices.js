'use strict';

var rules = {};

/**
* RULE: accessor-pairs
*	Never allow a setter to be defined without a paired getter. See [accessor-pairs]{@link http://eslint.org/docs/rules/accessor-pairs}.
*/
rules[ 'accessor-pairs' ] = 2;

/**
* RULE: block-scope-var
*	Never allow variables to be used outside of the block in which they were defined. See [block-scoped-var]{@link http://eslint.org/docs/rules/block-scoped-var}.
*/
rules[ 'block-scope-var' ] = 2;

/**
* RULE: complexity
*	Disable cyclomatic complexity. See [complexity]{@link http://eslint.org/docs/rules/complexity}.
*/
rules[ 'complexity' ] = 0;

/**
* RULE: consistent-return
*	Enforce consistent returns. See [consistent-return]{@link http://eslint.org/docs/rules/consistent-return}.
*/
rules[ 'consistent-return' ] = 2;

/**
* RULE: curly
*	Always require curly braces. See [curly]{@link http://eslint.org/docs/rules/curly}.
*/
rules[ 'curly' ] = 2;

/**
* RULE: default-case
*	Always require a `default` case in `switch` statements. See [default-case]{@link http://eslint.org/docs/rules/default-case}.
*/
rules[ 'default-case' ] = 2;

/**
* RULE: dot-notation
*	Enforce using dot notation over square-bracket notation. See [dot-notation]{@link http://eslint.org/docs/rules/dot-notation}.
*/
rules[ 'dot-notation' ] = 2;

/**
* RULE: dot-location
*	Require that a dot be on the same line as a property. See [dot-location]{@link http://eslint.org/docs/rules/dot-location}.
*/
rules[ 'dot-location' ] = [ 2, 'property' ];

/**
* RULE: eqeqeq
*	Always require `===` over `==`. See [eqeqeq]{@link http://eslint.org/docs/rules/eqeqeq}.
*/
rules[ 'eqeqeq' ] = 2;

/**
* RULE: guard-for-in
*	A `for-in` loop should always filter results using an `if` statement. See [guard-for-in]{@link http://eslint.org/docs/rules/guard-for-in}.
*/
rules[ 'guard-for-in' ] = 2;

/**
* RULE: no-alert
*	Never allow `alert`, `confirm`, or `prompt`. See [no-alert]{@link http://eslint.org/docs/rules/no-alert}.
*/
rules[ 'no-alert' ] = 2;

/**
* RULE: no-caller
*	Never allow `arguments.caller` or `arguments.callee` to be used, as they are deprecated. See [no-caller]{@link http://eslint.org/docs/rules/no-caller}.
*/
rules[ 'no-caller' ] = 2;

/**
* RULE: no-div-regex
*	Always require regex literals to escape division operators. See [no-div-regex]{@link http://eslint.org/docs/rules/no-div-regex}.
*/
rules[ 'no-div-regex' ] = 2;

/**
* RULE: no-else-return
*	Prevent unnecessary `else` blocks when an `if` contains a `return` statement. See [no-else-return]{@link http://eslint.org/docs/rules/no-else-return}.
*/
rules[ 'no-else-return' ] = 2;

/**
* RULE: no-empty-label
*	Never allow an empty label. See [no-empty-label]{@link http://eslint.org/docs/rules/no-empty-label}.
*/
rules[ 'no-empty-label' ] = 2;

/**
* RULE: no-eq-null
*	Never allow `null` comparisons. See [no-eq-null]{@link http://eslint.org/docs/rules/no-eq-null}.
*/
rules[ 'no-eq-null' ] = 2;

/**
* RULE: no-eval
*	Never allow the use of `eval`. See [no-eval]{@link http://eslint.org/docs/rules/no-eval}.
*/
rules[ 'no-eval' ] = 2;

/**
* RULE: no-extend-native
*	Never allow extending native prototypes. See [no-extend-native]{@link http://eslint.org/docs/rules/no-extend-native}.
*/
rules[ 'no-extend-native' ] = 2;

/**
* RULE: no-extra-bind
*	Prevent function binding when a function does not use `this`. See [no-extra-bind]{@link http://eslint.org/docs/rules/no-extra-bind}.
*/
rules[ 'no-extra-bind' ] = 2;

/**
* RULE: no-fallthrough
*	Prevent unintentional fall throughs in `switch` statements. See [no-fallthrough]{@link http://eslint.org/docs/rules/no-fallthrough}.
*/
rules[ 'no-fallthrough' ] = 2;

/**
* RULE: no-floating-decimal
*	Prevent floating decimals; e.g., `2.`. See [no-floating-decimal]{@link http://eslint.org/docs/rules/no-floating-decimal}.
*/
rules[ 'no-floating-decimal' ] = 2;

/**
* RULE: no-implicit-coercion
*	Allow implicit type coercion. See [no-implicit-coercion]{@link http://eslint.org/docs/rules/no-implicit-coercion}.
*/
rules[ 'no-implicit-coercion' ] = 0;

/**
* RULE: no-implied-eval
*	Never allow implied use of `eval` with `setTimeout`, `setInterval`, and `execScript`. See [no-implied-eval]{@link http://eslint.org/docs/rules/no-implied-eval}.
*/
rules[ 'no-implied-eval' ] = 2;

/**
* RULE: no-invalid-this
*	Never allow the use of `this` outside of classes. See [no-invalid-this]{@link http://eslint.org/docs/rules/no-invalid-this}.
*/
rules[ 'no-invalid-this' ] = 2;

/**
* RULE: no-iterator
*	Never allow the use of the deprecated `__iterator__` property. See [no-iterator]{@link http://eslint.org/docs/rules/no-iterator}.
*/
rules[ 'no-iterator' ] = 2;

/**
* RULE: no-labels
*	Never allow the user of `labels`. See [no-labels]{@link http://eslint.org/docs/rules/no-labels}.
*/
rules[ 'no-labels' ] = 2;

/**
* RULE: no-lone-blocks
*	Never allow standalone code blocks delimited by curly braces. See [no-line-blocks]{@link http://eslint.org/docs/rules/no-lone-blocks}.
*/
rules[ 'no-lone-blocks' ] = 2;



// EXPORTS //

module.exports = rules;
