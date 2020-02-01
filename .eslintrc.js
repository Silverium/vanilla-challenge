module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'html'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'always-multiline',
      },
    ],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0, // TODO: fix linter to resolve with alias
    'import/extensions': 0, // TODO: fix linter to resolve with alias
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
};
