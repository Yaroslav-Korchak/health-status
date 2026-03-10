# AI Coding Guidelines for health-status Project

## Project Overview
This is a lightweight JavaScript utility library that provides a single function `getHealthStatus(character)` to categorize character health states based on a numeric health value.

## Architecture
- **Core Function**: [`src/health.js`](src/health.js) contains the main `getHealthStatus` function with health thresholds: >50 = 'healthy', 15-50 = 'wounded', <15 = 'critical'
- **ES Modules**: Uses native ES6 modules (`"type": "module"` in package.json)
- **No Build Process**: Direct ES module usage, Babel configured for potential transpilation but not currently used in scripts

## Development Workflows
- **Testing**: Run `npm test` to execute Jest tests with coverage reporting
- **Linting**: ESLint configured with recommended rules plus Jest plugin for test files
- **Code Style**: Standard ESLint recommended rules, no custom formatting tools

## Key Conventions
- **Function Signature**: `getHealthStatus(character)` expects an object with `health` property (number)
- **Return Values**: String literals 'healthy', 'wounded', 'critical' (no enums or constants)
- **Test Structure**: Tests in `__tests__/` directory with `.test.js` extension, using Jest framework
- **ESLint Overrides**: Test files disable `jest/prefer-expect-assertions` rule

## Dependencies & Environment
- **Runtime**: Node.js with ES modules support
- **Polyfills**: core-js v3 for browser compatibility (configured in Babel)
- **Browser Support**: Browserslist `>1%, not dead` for Babel preset-env

## File Organization
- `src/health.js`: Main implementation
- `__tests__/health.test.js`: Unit tests (currently empty, needs implementation)
- Configuration files: `babel.config.json`, `.eslintrc.js`, `.browserslistrc`

## Common Patterns
- Simple conditional logic for health categorization
- No error handling for invalid inputs (assumes valid character objects)
- Default export pattern for the main function