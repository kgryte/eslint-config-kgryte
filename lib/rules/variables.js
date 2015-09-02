'use strict';

var rules = {};

/**
* RULE: init-declarations
*	Allow variables to be initialized either during declaration or otherwise. See [init-declarations]{@link http://eslint.org/docs/rules/init-declarations}.
*/
rules[ 'init-declarations' ] = 0;

/**
* RULE: no-catch-shadow
*	Address IE8 bug in which the `catch` clause can overwrite a variable in the outer scope. See [no-catch-shadow]{@link http://eslint.org/docs/rules/no-catch-shadow}.
*/
rules[ 'no-catch-shadow' ] = 2;

/**
* RULE: no-delete-var
*	Never allow variables to be deleted; only properties. See [no-delete-var]{@link http://eslint.org/docs/rules/no-delete-var}.
*/
rules[ 'no-delete-var' ] = 2;

/**
* RULE: no-label-var
*	Never allow a label to share a name with a variable. See [no-label-var]{@link http://eslint.org/docs/rules/no-label-var}.
*/
rules[ 'no-label-var' ] = 2;

/**
* RULE: no-shadow-restricted-names
*	Never allow reassignment of restricted names. See {@link http://eslint.org/docs/rules/no-shadow-restricted-names}.
*/
rules[ 'no-shadow-restricted-names' ] = 2;

/**
* RULE: no-shadow
*	Allow shadowing of variable names in a local scope. See [no-shadow]{@link http://eslint.org/docs/rules/no-shadow}.
*/
rules[ 'no-shadow' ] = 0;

/**
* RULE: no-undef-init
*	Never allow a variable to be initialized as `undefined`. See [no-undef-init]{@link http://eslint.org/docs/rules/no-undef-init}.
*/
rules[ 'no-undef-init' ] = 2;

/**
* RULE: no-undef
*	Never allow undeclared variables. See [no-undef]{@link http://eslint.org/docs/rules/no-undef}.
*/
rules[ 'no-undef' ] = 2;

/**
* RULE: no-undefined
*	Never allow the use of `undefined`. See [no-undefined]{@link http://eslint.org/docs/rules/no-undefined}.
*/
rules[ 'no-undefined' ] = 2;

/**
* RULE: no-unused-vars
*	Never allow unused variables, except for function arguments preceding a used argument. See [no-unused-vars]{@link http://eslint.org/docs/rules/no-unused-vars}.
*/
rules[ 'no-unused-vars' ] = [ 2, {
	'vars': 'all',
	'args': 'after-used'
}];

/**
* RULE: no-use-before-define
*	Never allow a variable to be used before being declared (except for function declarations). See [no-use-before-define]{@link http://eslint.org/docs/rules/no-use-before-define}.
*/
rules[ 'no-use-before-define' ] = [ 2, 'nofunc' ];


// EXPORTS //

module.exports = rules;
