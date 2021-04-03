# @smo/eslint-config-typescript

A set of ESLint rule for your Typescript project

## Installation

```bash
yarn add -D @smo/eslint-config-typescript
# or
npm install --save-dev @smo/eslint-config-typescript
```

## Dependencies

`@smo/eslint-config-typescript` needs a few dependencies to work:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- typescript
- eslint
- eslint-plugin-import
- eslint-plugin-react (for `react` preset)
- eslint-plugin-react-hooks (for `react` preset)
- eslint-plugin-jest (for `jest` preset)
- eslint-import-resolver-typescript (for `path-alias` preset)

## Configuration

Add `@smo/eslint-config-typescript` to your eslint configuration file:

```json
{
  "extends": ["typescript"]
}
```

Some plugins are also available:

```json
{
  "extends": ["typescript/react", "typescript/jest", "typescript/path-alias"]
}
```
