# @saramorillon/eslint-config-typescript

A set of ESLint rule for your Typescript project

## Installation

```bash
yarn add -D @saramorillon/eslint-config-typescript
# or
npm install --save-dev @saramorillon/eslint-config-typescript
```

## Dependencies

`@saramorillon/eslint-config-typescript` needs a few dependencies to work:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- typescript
- eslint
- eslint-plugin-import
- eslint-plugin-react (for `react` preset)
- eslint-plugin-react-hooks (for `react` preset)
- eslint-plugin-jest (for `jest` preset)
- eslint-plugin-testing-library (for `jest-react` preset)
- eslint-plugin-jest-dom (for `jest-react` preset)

## Configuration

Add `@saramorillon/eslint-config-typescript` to your eslint configuration file:

```json
{
  "extends": ["@saramorillon/eslint-config-typescript"]
}
```

Some plugins are also available:

```json
{
  "extends": [
    "@saramorillon/eslint-config-typescript/react",
    "@saramorillon/eslint-config-typescript/jest",
    "@saramorillon/eslint-config-typescript/jest-react"
  ]
}
```
