module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "import"],
      extends: [
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
    },
    {
      files: ["*.test.ts", "*.test.tsx"],
      env: {
        jest: true,
      },
    },
  ],
};
