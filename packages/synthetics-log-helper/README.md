# AWS CloudWatch Synthetics Type Support for Node.js Puppeteer Runtime Log Helper Class

TypeScript type definitions for AWS CloudWatch Synthetics log helper class in `syn-nodejs-puppeteer-*` runtime.

## Installation

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

This package provides complete TypeScript type definitions for the Synthetics log helper, enabling full IntelliSense support and type checking in your canary scripts.

## License

This project is licensed under the Apache-2.0 License.