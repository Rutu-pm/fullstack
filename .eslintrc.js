module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": [
      "warn",
      { allow: ["clear", "info", "error", "dir", "trace"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
//jscompleete.com/reactful
//github.com/jscomplete/learn-fullstack-javascript
