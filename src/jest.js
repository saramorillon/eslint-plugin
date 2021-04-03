module.exports = {
  extends: ["typescript"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      plugins: ["jest"],
    },
  ],
};
