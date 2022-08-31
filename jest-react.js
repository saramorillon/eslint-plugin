module.exports = {
  extends: ["@saramorillon/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      env: {
        browser: true,
        jest: true,
      },
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
    },
  ],
};
