# Type Support for Amazon CloudWatch Synthetics Node.js Puppeteer Runtime Logger Class

TypeScript type definitions for Amazon CloudWatch Synthetics logging functionality in `syn-nodejs-puppeteer-*` runtime.

## Installation

```bash
npm install @aws/synthetics-logger
```

## Usage

```typescript
const log = require('@aws/synthetics-logger');

// Log at different levels
log.debug('Debug message');
log.info('Info message');
log.warn('Warning message');
log.error('Error message');

// Log with exceptions
try {
  // some code
} catch (error) {
  log.error('Operation failed', error);
}

// Alias for info
log.log('This is the same as info');
```

## TypeScript Support

This package provides complete TypeScript type definitions for the Amazon CloudWatch Synthetics Node.js Puppeteer runtime logger class, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.