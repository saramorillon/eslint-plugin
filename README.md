# @saramorillon/eslint-plugin

A set of ESLint rule for your Typescript project

## Installation

```bash
yarn add -D @saramorillon/eslint-plugin
# or
npm install --save-dev @saramorillon/eslint-plugin
```

## Dependencies

`@saramorillon/eslint-plugin` provide following plugins:

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

Add `plugin:@saramorillon/back` to your eslint configuration file for backend projects:

```json
{
  "extends": ["plugin:@saramorillon/back"]
}
```

Add `plugin:@saramorillon/front` to your eslint configuration file for frontend projects:

```json
{
  "extends": ["plugin:@saramorillon/front"]
}
```
