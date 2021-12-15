module.exports = {
  extends: ["@mini-utils/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      env: {
        browser: true,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
    },
  ],
};
