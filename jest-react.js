module.exports = {
  extends: ["@mini-utils/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      env: {
        browser: true,
        jest: true,
      },
      plugins: [
        "plugin:jest-dom/recommended",
        "plugin:testing-library/recommended",
      ],
    },
  ],
};
