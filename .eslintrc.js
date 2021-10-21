module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        singleQuote: false,
        useTabs: false,
        tabWidth: 2,
      },
    ],
  },
};
