# @mini-utils/eslint-config-typescript

A set of ESLint rule for your Typescript project

## Installation

```bash
yarn add -D @mini-utils/eslint-config-typescript
# or
npm install --save-dev @mini-utils/eslint-config-typescript
```

## Dependencies

`@mini-utils/eslint-config-typescript` needs a few dependencies to work:

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

Add `@mini-utils/eslint-config-typescript` to your eslint configuration file:

```json
{
  "extends": ["@mini-utils/eslint-config-typescript"]
}
```

Some plugins are also available:

```json
{
  "extends": [
    "@mini-utils/eslint-config-typescript/react",
    "@mini-utils/eslint-config-typescript/jest",
    "@mini-utils/eslint-config-typescript/jest-react"
  ]
}
```
