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
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-testing-library
- eslint-plugin-jest-dom
- eslint-plugin-vitest

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
