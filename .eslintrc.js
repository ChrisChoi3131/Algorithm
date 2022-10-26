module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        arrowParens: 'avoid',
      },
    ],
    quotes: ['error', 'single'],
  },
};
