module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: false, useTabs: false, tabWidth: 2 },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
