module.exports = {
  extends: ["@mini-utils/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      plugins: ["jest"],
    },
  ],
};
