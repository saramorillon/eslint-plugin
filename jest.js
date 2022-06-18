module.exports = {
  extends: ["@saramorillon/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      plugins: ["jest"],
    },
  ],
};
