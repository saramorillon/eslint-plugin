module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["@saramorillon", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "require-await": "warn",
    "import/first": "warn",
    "import/order": [
      "warn",
      { groups: [["builtin", "external"], "index", "parent", "sibling"] },
    ],
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
  },
  overrides: [
    {
      files: ["*.test.*"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};
