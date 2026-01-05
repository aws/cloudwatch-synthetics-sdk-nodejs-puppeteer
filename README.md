# Type Support for Amazon CloudWatch Synthetics Node.js Puppeteer Runtime

TypeScript type definitions for Amazon CloudWatch Synthetics `syn-nodejs-puppeteer-*` runtime.

## Packages

This repository contains TypeScript type definitions for various Amazon CloudWatch Synthetics components:

- **[@aws/synthetics-puppeteer](packages/synthetics-puppeteer)** - Core Synthetics runtime types
- **[@aws/synthetics-link](packages/synthetics-link)** - Link object types for link checking
- **[@aws/synthetics-broken-link-checker-report](packages/synthetics-broken-link-checker-report)** - Broken link report types
- **[@aws/synthetics-logger](packages/synthetics-logger)** - Logging functionality types
- **[@aws/synthetics-log-helper](packages/synthetics-log-helper)** - Log sanitization types

## Installation

Install the core package:

```bash
npm install @aws/synthetics-puppeteer
```

Or install specific packages as needed:

```bash
npm install @aws/synthetics-link
npm install @aws/synthetics-logger
```

## Usage

```typescript
import { synthetics } from '@aws/synthetics-puppeteer';

const runCanary = async () => {
    // Launch browser
    await synthetics.launch();
    const page = await synthetics.getPage();
    
    // Execute monitored steps
    await synthetics.executeStep('navigate', async () => {
        await page.goto('https://example.com');
    });
    
    await synthetics.executeStep('verify-content', async () => {
        await page.waitForSelector('h1');
    });
    
    await synthetics.close();
};
```

## TypeScript Support

These packages provide complete TypeScript type definitions for the Amazon CloudWatch Synthetics Node.js Puppeteer runtime, enabling full IntelliSense support and type checking in your canary scripts.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.