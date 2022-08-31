module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@saramorillon", "react", "react-hooks"],
  extends: [
    "plugin:@saramorillon/back",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["*.test.*"],
      env: {
        browser: true,
        jest: true,
      },
      plugins: ["jest-dom", "testing-library"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
    },
  ],
};
