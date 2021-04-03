module.exports = {
  extends: ["@mini-utils/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
    },
  ],
};
