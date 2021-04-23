'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': 'error',
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'catch': {
          'after': false
        }
      }
    }],
    'max-statements-per-line': ['error', { max: 2 }],
    'new-cap': ['error'],
    'no-console': ['error', { 'allow': ['error'] }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-trailing-spaces': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', {
      'uninitialized': 'always',
      'initialized': 'never'
    }],
    'operator-linebreak': ['error', 'before'],
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }],
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      'words': false,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always'],
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturn: false,
      requireReturnDescription: false
    }]
  }
};
