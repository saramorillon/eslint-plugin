module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  plugins: ['@saramorillon', 'import'],
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  rules: {
    'require-await': 'warn',
    'import/first': 'warn',
    'import/order': ['warn', { groups: [['builtin', 'external'], 'index', 'parent', 'sibling'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
      },
    },
    {
      files: ['*.test.*'],
      env: {
        jest: true,
      },
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
    },
  ],
}
