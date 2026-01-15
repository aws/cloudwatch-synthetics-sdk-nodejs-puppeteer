# Type Support for Amazon CloudWatch Synthetics Node.js Puppeteer Runtime Log Helper Class

TypeScript type definitions for Amazon CloudWatch Synthetics log helper class in `syn-nodejs-puppeteer-*` runtime.

## Installation

Please ensure the type definition package version matches your canary's runtime version.

```bash
npm install @aws/synthetics-log-helper
```

## Usage

```typescript
const syntheticsLogHelper = require('@aws/synthetics-log-helper');

const sanitizedUrl = syntheticsLogHelper.getSanitizedUrl('URL');

const urlConfig = {
   restrictedUrlParameters = ['*']
};
const sanitizedUrl = syntheticsLogHelper.getSanitizedUrl('URL', urlConfig);
              
```

## TypeScript Support
This package provides complete TypeScript type definitions for the Amazon CloudWatch Synthetics Node.js Puppeteer runtime log helper class, enabling full IntelliSense support and type checking in your canary scripts.

## License

This project is licensed under the Apache-2.0 License.