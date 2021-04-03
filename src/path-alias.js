module.exports = {
  extends: ["typescript"],
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
