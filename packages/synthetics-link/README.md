# AWS CloudWatch Synthetics Type Support for Node.js Puppeteer Runtime Link Object

TypeScript type definitions for AWS CloudWatch Synthetics link objects in `syn-nodejs-puppeteer-*` runtime.

## Installation

```bash
npm install @aws/synthetics-link
```

## Usage

```typescript
const SyntheticsLink = require('@aws/synthetics-link');

// Create a new link
const link = new SyntheticsLink('https://example.com')
  .withText('Example Link')
  .withParentUrl('https://parent.com')
  .withStatusCode('200')
  .withStatusText('OK');

// Handle failures
const failedLink = new SyntheticsLink('https://broken.com')
  .withFailureReason('Network timeout')
  .withStatusCode('500');

// Add screenshot results
link.addScreenshotResult('screenshot.png');
```

## TypeScript Support

This package provides complete TypeScript type definitions for the AWS CloudWatch Synthetics Node.js runtime link objects, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.