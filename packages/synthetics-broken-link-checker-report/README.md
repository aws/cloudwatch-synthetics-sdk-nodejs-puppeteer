# Type Support for Amazon CloudWatch Synthetics Node.js Puppeteer Runtime Broken Link Checker Report Library

TypeScript type definitions for Amazon CloudWatch Synthetics broken link checker reporting functionality in `syn-nodejs-puppeteer-*` runtime.

## Installation

```bash
npm install @aws/synthetics-broken-link-checker-report
```

## Usage

```typescript
const BrokenLinkCheckerReport = require('@aws/synthetics-broken-link-checker-report');
const SyntheticsLink = require('@aws/synthetics-link');

let brokenLinkCheckerReport = new BrokenLinkCheckerReport();

// Add links to the report
const link = new SyntheticsLink('https://example.com');
brokenLinkCheckerReport.addLink(link);

// Get report data
const allLinks = brokenLinkCheckerReport.getLinks();
const brokenCount = brokenLinkCheckerReport.getTotalBrokenLinks();
const totalCount = brokenLinkCheckerReport.getTotalLinksChecked();
```

## TypeScript Support

This package provides complete TypeScript type definitions for the Amazon CloudWatch Synthetics Node.js Puppeteer runtime broken link checker report functionality, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.