// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'no-console': 0,
    'linebreak-style': 0,
    'block-spacing': 2,
    'max-len': 0,
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'linebreak-style': 0,
    'keyword-spacing': [2, { 'overrides': {
      'if': { 'after': false },
      'for': { 'after': false },
      'while': { 'after': false },
      'switch': { 'after': false }
    }}],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}